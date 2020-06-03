"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var pkg_dir_1 = __importDefault(require("pkg-dir"));
var dotenv_1 = require("dotenv");
var root = pkg_dir_1.default.sync();
dotenv_1.config({ path: root + '/.env' });
var envs = {
    ACCESS_TOKEN: process.env.ACCESS_TOKEN,
    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
    CONSUMER_API_KEY: process.env.CONSUMER_API_KEY,
    CONSUMER_API_SECRET_KEY: process.env.CONSUMER_API_SECRET_KEY,
    SERVER_ENDPOINT: process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : 'https://covid19ea.herokuapp.com'
};
console.log(envs);
exports.default = envs;
