
const { createLogger, format, transports, config } = require('winston');
const { combine, timestamp, json, colorize } = format;

require('winston-daily-rotate-file');
const InfoLogFileName = 'YTLOGS/info.log';
const ErrorLogFileName = 'YTLOGS/error.log';

const appLogger = createLogger({
    level: process.env.LOG_LEVEL || 'info',
    prettyPrint: true,
    format: combine(
        timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
        json(),
        colorize({ all: true }),        
    ),
    transports: [
        new transports.Console(),
        new transports.File({ filename: InfoLogFileName })
    ],
    exceptionHandlers: [
        new transports.File({ filename: ErrorLogFileName })
    ]
});

module.exports = {
    appLogger: appLogger
};

