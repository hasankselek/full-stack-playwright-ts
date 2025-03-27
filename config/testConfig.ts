interface Environment {
  baseUrl: string;
  apiBaseUrl: string;
  credentials: {
    username: string;
    password: string;
  };
  timeouts: {
    defaultTimeout: number;
    navigationTimeout: number;
  };
}

type EnvironmentType = 'development' | 'staging' | 'production';

export class TestConfig {
  private static instance: TestConfig;
  private currentEnv: EnvironmentType;
  private environments: Record<EnvironmentType, Environment>;

  private constructor() {
    this.currentEnv = (process.env.TEST_ENV as EnvironmentType) || 'development';
    
    this.environments = {
      development: {
        baseUrl: 'http://localhost:3000',
        apiBaseUrl: 'http://localhost:3001/api',
        credentials: {
          username: 'test@example.com',
          password: 'password123'
        },
        timeouts: {
          defaultTimeout: 30000,
          navigationTimeout: 10000
        }
      },
      staging: {
        baseUrl: 'https://staging.example.com',
        apiBaseUrl: 'https://staging.example.com/api',
        credentials: {
          username: 'test@example.com',
          password: 'password123'
        },
        timeouts: {
          defaultTimeout: 60000,
          navigationTimeout: 15000
        }
      },
      production: {
        baseUrl: 'https://example.com',
        apiBaseUrl: 'https://example.com/api',
        credentials: {
          username: 'test@example.com',
          password: 'password123'
        },
        timeouts: {
          defaultTimeout: 60000,
          navigationTimeout: 15000
        }
      }
    };
  }

  public static getInstance(): TestConfig {
    if (!TestConfig.instance) {
      TestConfig.instance = new TestConfig();
    }
    return TestConfig.instance;
  }

  public getBaseUrl(): string {
    return this.environments[this.currentEnv].baseUrl;
  }

  public getApiBaseUrl(): string {
    return this.environments[this.currentEnv].apiBaseUrl;
  }

  public getCredentials(): { username: string; password: string } {
    return this.environments[this.currentEnv].credentials;
  }

  public getTimeouts(): { defaultTimeout: number; navigationTimeout: number } {
    return this.environments[this.currentEnv].timeouts;
  }

  public setEnvironment(env: EnvironmentType): void {
    this.currentEnv = env;
  }

  public getCurrentEnvironment(): EnvironmentType {
    return this.currentEnv;
  }
} 