import { request, APIRequestContext } from '@playwright/test';

export class APIHelper {
  private context: APIRequestContext;
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async init(): Promise<void> {
    this.context = await request.newContext({
      baseURL: this.baseUrl,
      extraHTTPHeaders: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
  }

  async get<T>(url: string, headers?: Record<string, string>): Promise<T> {
    const response = await this.context.get(url, { headers });
    return await response.json() as T;
  }

  async post<T>(url: string, data: any, headers?: Record<string, string>): Promise<T> {
    const response = await this.context.post(url, {
      data,
      headers
    });
    return await response.json() as T;
  }

  async put<T>(url: string, data: any, headers?: Record<string, string>): Promise<T> {
    const response = await this.context.put(url, {
      data,
      headers
    });
    return await response.json() as T;
  }

  async delete<T>(url: string, headers?: Record<string, string>): Promise<T> {
    const response = await this.context.delete(url, { headers });
    return await response.json() as T;
  }

  async dispose(): Promise<void> {
    await this.context.dispose();
  }
} 