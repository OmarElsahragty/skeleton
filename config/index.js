import Dotenv from "dotenv";

Dotenv.config();

export default Object.freeze({
  Port: process.env.PORT * 1,

  Database: {
    Host:
      process.env.NODE_ENV === "Docker"
        ? process.env.DOCKER_DATABASE_HOST
        : process.env.DATABASE_HOST,
    Port:
      (process.env.NODE_ENV === "Docker"
        ? process.env.DOCKER_DATABASE_PORT
        : process.env.DATABASE_PORT) * 1,
    Name: process.env.DATABASE_NAME,
    Username: process.env.DATABASE_USERNAME,
    Password: process.env.DATABASE_PASSWORD,
    Dialect: process.env.DATABASE_DIALECT,
    Pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },

  Cache: {
    Host:
      process.env.NODE_ENV === "Docker"
        ? process.env.DOCKER_CACHE_HOST
        : process.env.CACHE_HOST,
    Port:
      (process.env.NODE_ENV === "Docker"
        ? process.env.DOCKER_CACHE_PORT
        : process.env.CACHE_PORT) * 1,
  },

  JwtSecret: process.env.JWT_SECRET,
  JwtLifeTime: process.env.JWT_LIFE_TIME,

  CloudBucketURL: process.env.CLOUD_BUCKET_URL,

  SMTP: {
    Host: process.env.SMTP_HOST,
    Port: process.env.SMTP_PORT * 1,
    User: process.env.SMTP_USER,
    Password: process.env.SMTP_PASSWORD,
  },

  Twilio: {
    AccountSID: process.env.TWILIO_ACCOUNT_SID,
    AuthToken: process.env.TWILIO_AUTH_TOKEN,
    ServiceID: process.env.TWILIO_SERVICE_ID,
  },

  App: {
    Name: process.env.APP_NAME,
    Logo: process.env.APP_LOGO,
    Website: process.env.APP_WEBSITE,
    OwnerWebsite: process.env.APP_OWNER_WEBSITE,
    Mail: process.env.APP_MAIL,
  },
});
