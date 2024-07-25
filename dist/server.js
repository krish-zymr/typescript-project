"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServer = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const express_session_1 = __importDefault(require("express-session"));
const userRoutes_1 = __importDefault(require("./Routes/userRoutes"));
const menuRoutes_1 = __importDefault(require("./Routes/menuRoutes"));
const employeRoutes_1 = __importDefault(require("./Routes/employeRoutes"));
const db_1 = require("./Database/db");
// import store from "./Middleware/session";
const winston_1 = __importDefault(require("winston"));
const { combine, timestamp, printf, json, prettyPrint } = winston_1.default.format;
const app = (0, express_1.default)();
const port = 3000;
const mongoUrl = "mongodb://localhost:27017/admin";
(0, db_1.connectMongo)(mongoUrl);
const startServer = () => {
    app.use(body_parser_1.default.json());
    app.use((0, express_session_1.default)({
        secret: "secret",
        resave: false,
        saveUninitialized: false,
        // store: store,
    }));
    app.use("/user", userRoutes_1.default);
    app.use("/menu", menuRoutes_1.default);
    app.use('/employe', employeRoutes_1.default);
    // const greeting: string = "Hello, TypeScript!";
    // console.log(greeting);
    app.get("/", (req, res) => {
        res.send("Welcome to the users data base");
        console.log("Started");
    });
    app.listen(port, () => {
        console.log(`Server started at ${port}`);
    });
};
exports.startServer = startServer;
