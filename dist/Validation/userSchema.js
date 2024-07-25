"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yup_1 = require("yup");
const userSchema = (0, yup_1.object)({
    body: (0, yup_1.object)({
        name: (0, yup_1.string)().required("Name is required"),
        language: (0, yup_1.string)(),
        id: (0, yup_1.string)(),
        bio: (0, yup_1.string)(),
        version: (0, yup_1.number)()
    }),
    params: (0, yup_1.object)({
        id: (0, yup_1.number)()
    })
});
exports.default = userSchema;
