import winston from 'winston';

// Define the custom logging levels
const levels: winston.config.AbstractConfigSetLevels = {
  error: 1,
  warning: 2,
  success: 3,
  operation: 4
};

const colors = {
  error: 'red',
  warning: 'orange',
  success: 'green',
  operation: 'blue'
};

interface Ilevels extends winston.Logger {
  error: winston.LeveledLogMethod;
  warning: winston.LeveledLogMethod;
  success: winston.LeveledLogMethod;
  operation: winston.LeveledLogMethod;
}

// Add the custom colors defined for each level
winston.addColors(colors);

const logger: Ilevels = <Ilevels>winston.createLogger({
  levels: levels,
  format: winston.format.combine(winston.format.colorize(), winston.format.simple()),
  transports: [
    new winston.transports.Console({
      level: 'operation'
    })
  ]
});

export default logger;
