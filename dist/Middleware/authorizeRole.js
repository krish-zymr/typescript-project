"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorizeRole = void 0;
const authorizeRole = (roles) => {
    return (req, res, next) => {
        const employe = req.employe;
        if (!req.employe || !roles.includes(employe.role)) {
            return res.sendStatus(403);
        }
        next();
    };
};
exports.authorizeRole = authorizeRole;
