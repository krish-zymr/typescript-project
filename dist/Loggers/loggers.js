"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuLogger = exports.userLogger = void 0;
const winston_1 = __importDefault(require("winston"));
const { combine, timestamp, printf, json, prettyPrint, cli } = winston_1.default.format;
exports.userLogger = winston_1.default.createLogger({
    level: 'info',
    format: combine(timestamp(), cli(), printf(info => `${info.level} ${info.timestamp}${info.message}`)),
    transports: [
        new winston_1.default.transports.Console(),
        new winston_1.default.transports.File({ filename: 'userLogs.log' })
    ],
    defaultMeta: { service: "UserService" }
});
exports.menuLogger = winston_1.default.createLogger({
    level: 'info',
    format: combine(json(), prettyPrint()),
    transports: [
        //new winston.transports.Console(),
        new winston_1.default.transports.File({ filename: "MenuLogs1.log" })
    ],
    defaultMeta: { service: "MenuService1" }
});
