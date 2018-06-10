const env = process.env;

export default {
  port: env.PORT || 8080,
  host: env.HOST || '0.0.0.0'
};
