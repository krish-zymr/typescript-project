"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateSession = exports.authenticateJwt = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authenticateJwt = (req, res, next) => {
    var _a, _b;
    try {
        const token = (_b = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[0]) !== null && _b !== void 0 ? _b : "";
        if (!token) {
            res.status(404).json({ error: "Token not Provided" });
        }
        jsonwebtoken_1.default.verify(token, process.env.jwtSecret, (err, payload) => {
            if (err) {
                return res.sendStatus(403);
            }
            req.employe = payload; // Attach the user object to the request object
            next();
        });
        next();
    }
    catch (error) {
        res.status(400).json({ message: "Token is not valid" });
    }
};
exports.authenticateJwt = authenticateJwt;
const authenticateSession = (req, res, next) => {
    try {
        if (req.session.isAuth) {
            next();
        }
        else {
            res.status(404).json({ error: "Unauthorised" });
        }
    }
    catch (error) {
        res.status(400).json({ message: "session error" });
    }
};
exports.authenticateSession = authenticateSession;
