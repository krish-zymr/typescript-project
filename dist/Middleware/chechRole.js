"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
function checkRole(requiredRole) {
    return function (req, res, next) {
        var _a;
        try {
            if (((_a = req.session) === null || _a === void 0 ? void 0 : _a.role) === requiredRole) {
                next();
            }
            else {
                res.status(403).json({ message: 'Access denied' });
            }
        }
        catch (error) {
            res.status(403).json({ message: 'error at checkRole.ts' });
        }
    };
}
exports.default = checkRole;
