"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var twitter_1 = __importDefault(require("./twitter"));
var covid_1 = __importDefault(require("./covid"));
var router = express_1.Router();
router.use('/twitter', twitter_1.default);
router.use('/covid', covid_1.default);
exports.default = router;
