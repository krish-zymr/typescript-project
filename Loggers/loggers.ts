import winston from "winston";
const {combine , timestamp , printf , json ,prettyPrint , cli} = winston.format;


export const userLogger = winston.createLogger( {
    level :'info',
    format :combine(
        timestamp(),
        cli(),
        printf(info=>`${info.level} ${info.timestamp}${info.message}`)
    ),
    transports : [
        new winston.transports.Console(),
        new winston.transports.File({filename :'userLogs.log' })
    ],
    defaultMeta : {service : "UserService"}
});


export const menuLogger = winston.createLogger({  
    level :'info',
    format :combine(
        json(),
        prettyPrint()
    ),
    transports:[
        //new winston.transports.Console(),
        new winston.transports.File({filename:"MenuLogs1.log"})
    ],
    defaultMeta : {service : "MenuService1"}
  })
  
  