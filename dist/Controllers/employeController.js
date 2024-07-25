"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleLoginController = void 0;
exports.handleRegisterController = handleRegisterController;
const Employe_1 = __importDefault(require("../Models/Employe"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
function handleRegisterController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { name, username, password, role } = req.body;
            const existingUser = yield Employe_1.default.findOne({ username });
            if (existingUser) {
                return res.status(400).json({ message: "User already exists" });
            }
            const salt = yield bcrypt_1.default.genSalt();
            const hashedPassword = yield bcrypt_1.default.hash(password, salt);
            const newEmploye = new Employe_1.default({
                name,
                username,
                password: hashedPassword,
                role: role
            });
            const savedEmploye = yield newEmploye.save();
            res.status(200).json(savedEmploye);
        }
        catch (error) {
            console.log("Error occurred", error);
            res.status(500).json({ error: "Internal server error" });
        }
    });
}
const handleLoginController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        const employe = yield Employe_1.default.findOne({ username });
        if (!employe) {
            return res.status(404).json({ error: "User not found" });
        }
        const isEmploye = yield bcrypt_1.default.compare(password, employe.password);
        if (!isEmploye) {
            return res.status(400).json({ error: "Invalid Password" });
        }
        const token = yield jsonwebtoken_1.default.sign({ id: employe._id, role: employe.role }, process.env.jwtSecret, { expiresIn: "1h" });
        req.session.userId = employe._id;
        req.session.role = employe.role;
        req.session.isAuth = true;
        res.status(200).json({ token });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error Yaha se" });
    }
});
exports.handleLoginController = handleLoginController;
