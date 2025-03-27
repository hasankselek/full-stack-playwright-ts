enum LogLevel {
    INFO = 'INFO',
    WARN = 'WARN',
    ERROR = 'ERROR',
    DEBUG = 'DEBUG'
  }
  
  class Logger {
    private logToConsole(level: LogLevel, message: string): void {
      const timestamp = new Date().toISOString();
      console.log(`[${timestamp}] [${level}] ${message}`);
    }
  
    info(message: string): void {
      this.logToConsole(LogLevel.INFO, message);
    }
  
    warn(message: string): void {
      this.logToConsole(LogLevel.WARN, message);
    }
  
    error(message: string): void {
      this.logToConsole(LogLevel.ERROR, message);
    }
  
    debug(message: string): void {
      if (process.env.DEBUG) {
        this.logToConsole(LogLevel.DEBUG, message);
      }
    }
  }
  
  export const logger = new Logger();