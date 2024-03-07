const { transports, createLogger, format, log } = require('winston');

const logger = createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss',
        }),
        format.cli({
            timestamp: true,
        }),
    ),
    transports: [
        new transports.Console({
            level: 'info',
            colorize: true,
            prettyPrint: true,
            timestamp: true,
        }),
    ],
});

module.exports = logger;
