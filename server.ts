import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import session from "express-session";
import userRoutes from "./Routes/userRoutes";
import menuRoutes from "./Routes/menuRoutes";
import employeRoutes from "./Routes/employeRoutes";
import { connectMongo } from "./Database/db";
// import store from "./Middleware/session";
import winston from "winston";
import { error } from "console";
const { combine, timestamp, printf, json, prettyPrint } = winston.format;
const app = express();
const port = 3000;

const mongoUrl = "mongodb://localhost:27017/admin";
connectMongo(mongoUrl);

export const startServer = () => {
  app.use(bodyParser.json())
  app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    // store: store,
  }));

  app.use("/user", userRoutes);
  app.use("/menu", menuRoutes);
  app.use('/employe', employeRoutes);

  // const greeting: string = "Hello, TypeScript!";
  // console.log(greeting);

  app.get("/", (req: Request, res: Response) => {
    res.send("Welcome to the users data base");
    console.log("Started");
  });

  app.listen(port, () => {
    console.log(`Server started at ${port}`);
  });

}