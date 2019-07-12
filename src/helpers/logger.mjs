import winston from 'winston'
// import WinstonTelegram from 'winston-telegram'
import moment from 'moment'
import dotenv from 'dotenv'

dotenv.config()
const { combine, label, printf, colorize, timestamp } = winston.format
const logLabel = 'bots-business-viber'
const logTimestamp = moment().format('MM-DD-YY H:mm:ss')
const logMessageFormat = printf(info => `[${info.label}]: ${info.message} | ${info.timestamp}`)
const levels = {
  ...winston.config.syslog.levels,
  telegram_technical: 8,
  telegram_info: 9,
}
winston.addColors({
  error: 'red',
  warn: 'yellow',
  info: 'cyan',
  verbose: 'blue',
  debug: 'white',
  silly: 'white',
})

export const logger = winston.createLogger({
    levels,
    transports: [
      new winston.transports.Console({
        level: 'info',
        timestamps: true,
        format: combine(
          label({ label: logLabel }),
          colorize({ all: true, colors: { info: 'blue', error: 'red' } }),
          timestamp({ format: logTimestamp }),
          logMessageFormat,
        ),
      }),
    // One of possible way to logg
    //   new WinstonTelegram({
    //     level: 'telegram_technical',
    //     template: `[${logLabel}]: {message} | ${logTimestamp}`,
    //     token: process.env.INFO_BOT_TOKEN,
    //     chatId: process.env.CHAT_ID_TECHNICAL,
    //     unique: true,
    //   }),
    //   new WinstonTelegram({
    //     level: 'telegram_sales',
    //     template: `[${logLabel}]: {message} | ${logTimestamp}`,
    //     token: process.env.INFO_BOT_TOKEN,
    //     chatId: process.env.CHAT_ID_SALES,
    //     unique: true,
    //   }),
    ],
  })
  
  export const definiteLogger = err => {
    if (process.env.NODE_ENV === 'development') {
      return console.log(err)
    }
    return logger.log('telegram_technical', err)
  }