import { Reporter, TestCase, TestResult } from '@playwright/test/reporter';
import fs from 'fs';
import path from 'path';

/**
 * Custom reporter that enhances HTML reporting with additional features
 */
class CustomReporter implements Reporter {
  private reportsDir: string;

  constructor() {
    this.reportsDir = path.join(process.cwd(), 'reports');
    
    // Ensure the reports directory exists
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  onBegin(config: any, suite: any) {
    console.log(`Starting the run with ${suite.allTests().length} tests`);
    
    // Create a run timestamp
    const timestamp = new Date().toISOString().replace(/:/g, '-');
    
    // Create a report file for this run
    const reportPath = path.join(this.reportsDir, `report-${timestamp}.json`);
    fs.writeFileSync(reportPath, JSON.stringify({
      startTime: new Date().toISOString(),
      config: {
        testDir: config.testDir,
        projects: config.projects.map((p: any) => p.name)
      },
      tests: []
    }, null, 2));
  }

  onTestBegin(test: TestCase) {
    console.log(`Starting test: ${test.title}`);
  }

  onTestEnd(test: TestCase, result: TestResult) {
    console.log(`Finished test: ${test.title} with status ${result.status}`);
    
    // Get the latest report file
    const files = fs.readdirSync(this.reportsDir);
    const reportFiles = files.filter(f => f.startsWith('report-')).sort();
    const latestReport = reportFiles[reportFiles.length - 1];
    
    if (latestReport) {
      const reportPath = path.join(this.reportsDir, latestReport);
      const report = JSON.parse(fs.readFileSync(reportPath, 'utf-8'));
      
      // Add test result to the report
      report.tests.push({
        title: test.title,
        path: test.location.file,
        status: result.status,
        duration: result.duration,
        errors: result.errors.map(e => e.message),
        attachments: result.attachments.map(a => ({
          name: a.name,
          path: a.path,
          contentType: a.contentType
        }))
      });
      
      // Update the report file
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    }
  }

  onEnd(result: { status?: 'passed' | 'failed' | 'timedout' | 'interrupted' }) {
    console.log(`Finished the run with status: ${result.status}`);
    
    // Get the latest report file
    const files = fs.readdirSync(this.reportsDir);
    const reportFiles = files.filter(f => f.startsWith('report-')).sort();
    const latestReport = reportFiles[reportFiles.length - 1];
    
    if (latestReport) {
      const reportPath = path.join(this.reportsDir, latestReport);
      const report = JSON.parse(fs.readFileSync(reportPath, 'utf-8'));
      
      // Update the end time
      report.endTime = new Date().toISOString();
      report.status = result.status;
      
      // Calculate summary
      const passedTests = report.tests.filter((t: any) => t.status === 'passed').length;
      const failedTests = report.tests.filter((t: any) => t.status === 'failed').length;
      const skippedTests = report.tests.filter((t: any) => t.status === 'skipped').length;
      
      report.summary = {
        total: report.tests.length,
        passed: passedTests,
        failed: failedTests,
        skipped: skippedTests
      };
      
      // Update the report file
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    }
  }
}

export default CustomReporter; 