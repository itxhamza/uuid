"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NILL_1 = __importDefault(require("./NILL"));
const uuid = (mask = NILL_1.default) => {
    if (mask.length == 0) {
        console.log(new Error("Mask Length must be greater then 0"));
    }
    const randomId = mask.replace(/[xy]/g, function (c) {
        var r = (Math.random() * 16) | 0, v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
    return randomId;
};
exports.default = uuid;
