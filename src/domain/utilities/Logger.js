import { createLogger, format as winstonFormat, transports } from "winston";

const format = winstonFormat.combine(
  winstonFormat.timestamp({ format: "DD-MM-YYYY HH:mm:ss" }),
  winstonFormat.printf((info) => `${[info.timestamp]}: ${info.message}`)
);

export default createLogger({
  transports: [
    new transports.File({
      level: "error",
      filename: "logs/errors.log",
      format,
    }),
  ],
});
