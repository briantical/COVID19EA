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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var axios_1 = __importDefault(require("axios"));
var covid19_api_1 = require("covid19-api");
var utils_1 = require("./../../utils");
var covid_routes = express_1.Router();
covid_routes.get('/', function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        covid19_api_1.getReports()
            .then(function (data) { return res.json({ data: data }); })
            .catch(function (error) {
            res.status(500).json({ error: error });
            utils_1.Logger.error(error);
        });
        return [2 /*return*/];
    });
}); });
covid_routes.get('/country/:country', function (req, res) {
    var _country = req.params.country;
    _country = _country.toLocaleLowerCase();
    covid19_api_1.getReportsByCountries(_country)
        .then(function (data) {
        var _a = data[0][0], country = _a.country, flag = _a.flag, cases = _a.cases, deaths = _a.deaths, recovered = _a.recovered;
        var report = { country: country, flag: flag, cases: cases, deaths: deaths, recovered: recovered };
        res.json({ report: report });
    })
        .catch(function (error) {
        res.status(500).json({ error: error });
        utils_1.Logger.error(error);
    });
});
covid_routes.get('/statistics/:country', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var country, country_reports, _a, _b, reports, error_1;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                country = req.params.country;
                _c.label = 1;
            case 1:
                _c.trys.push([1, 3, , 4]);
                return [4 /*yield*/, axios_1.default.get("https://pomber.github.io/covid19/timeseries.json")];
            case 2:
                country_reports = _c.sent();
                _a = country_reports, _b = country, reports = _a.data[_b];
                res.json({ reports: reports });
                return [3 /*break*/, 4];
            case 3:
                error_1 = _c.sent();
                res.status(500).json({ error: error_1 });
                utils_1.Logger.error(error_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
exports.default = covid_routes;