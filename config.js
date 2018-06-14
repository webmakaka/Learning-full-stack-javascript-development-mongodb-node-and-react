const env = process.env;

export default {
  dbName: 'learning-full-stack-js-development-mongodb-node-and-react',
  dbHost: 'ds159110.mlab.com:59110',
  dbLogin: 'user1',
  dbPassword: 'password1',
  port: env.PORT || 8080,
  host: env.HOST || '0.0.0.0',
  get serverUrl() {
    return `http://${this.host}:${this.port}`;
  },
  get dbUrl() {
    return `mongodb://${this.dbLogin}:${this.dbPassword}@${this.dbHost}/${
      this.dbName
    }`;
  }
};
