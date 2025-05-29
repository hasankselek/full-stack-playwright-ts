// utils/ConfigReader.ts
import fs from 'fs';
import path from 'path';

export class ConfigReader {
  // Burayı projenin köküne göre ayarla
  private static filePath = path.resolve(__dirname, '../config/configuration.json');
  private static data: Record<string, any> | null = null;

  // İlk erişimde dosyayı yükle
  private static load() {
    if (this.data === null) {
      try {
        const content = fs.readFileSync(this.filePath, 'utf-8');
        this.data = JSON.parse(content);
      } catch (e) {
        // Dosya yoksa başlat
        this.data = {};
      }
    }
  }

  public static get(key: string): any {
    this.load();
    return this.data![key];
  }

  public static set(key: string, value: any): void {
    this.load();
    this.data![key] = value;
    // Dosyaya yaz
    fs.writeFileSync(this.filePath, JSON.stringify(this.data, null, 2), 'utf-8');
  }
}