const APP_ENV = process.env.NODE_ENV;

export class Environment {
  static isDev(): boolean {
    return (APP_ENV === "development");
  }

  static isProd(): boolean {
    return (APP_ENV === "production");
  }
}
