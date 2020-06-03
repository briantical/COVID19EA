"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var winston_1 = __importDefault(require("winston"));
// Define the custom logging levels
var levels = {
    error: 1,
    warning: 2,
    success: 3,
    operation: 4
};
var colors = {
    error: 'red',
    warning: 'orange',
    success: 'green',
    operation: 'blue'
};
// Add the custom colors defined for each level
winston_1.default.addColors(colors);
var logger = winston_1.default.createLogger({
    levels: levels,
    format: winston_1.default.format.combine(winston_1.default.format.colorize(), winston_1.default.format.simple()),
    transports: [
        new winston_1.default.transports.Console({
            level: 'operation'
        })
    ]
});
exports.default = logger;
