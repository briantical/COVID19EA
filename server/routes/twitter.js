"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var twit_1 = __importDefault(require("twit"));
var utils_1 = require("./../../utils");
var config_1 = __importDefault(require("./../../config"));
// Configuration for twit
var Twitter = new twit_1.default({
    consumer_key: config_1.default.CONSUMER_API_KEY,
    consumer_secret: config_1.default.CONSUMER_API_SECRET_KEY,
    access_token: config_1.default.ACCESS_TOKEN,
    access_token_secret: config_1.default.ACCESS_TOKEN_SECRET,
    timeout_ms: 60 * 1000,
    strictSSL: true // optional - requires SSL certificates to be valid.
});
var twitter_routes = express_1.Router();
twitter_routes.get('/', function (req, res) {
    var tweets = [];
    //Get the date one week back
    var date = new Date(Date.now() - 604800000);
    var _date = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    var _a = req.query.trend, trend = _a === void 0 ? 'coronavirus' : _a;
    // Get 20 the tweets about #trend in the past week
    Twitter.get('search/tweets', { q: "#" + trend + " since:" + _date, count: 20 }, function (error, data) {
        if (error) {
            utils_1.Logger.error(error);
            res.status(500).json({ error: error });
        }
        else {
            var statuses = data.statuses;
            statuses.map(function (status) {
                var id_str = status.id_str;
                tweets = __spreadArrays(tweets, [id_str]);
            });
            res.json({ tweets: tweets });
        }
    });
});
exports.default = twitter_routes;
