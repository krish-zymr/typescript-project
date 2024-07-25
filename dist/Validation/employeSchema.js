"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yup_1 = require("yup");
const employeSchema = (0, yup_1.object)({
    body: (0, yup_1.object)({
        name: (0, yup_1.string)(),
        username: (0, yup_1.string)(),
        password: (0, yup_1.string)(),
        role: (0, yup_1.string)()
    }),
    params: (0, yup_1.object)({
        id: (0, yup_1.number)()
    })
});
exports.default = employeSchema;
