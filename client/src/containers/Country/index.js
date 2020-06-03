"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
var react_1 = __importStar(require("react"));
var axios_1 = __importDefault(require("axios"));
var react_router_dom_1 = require("react-router-dom");
var react_bootstrap_1 = require("react-bootstrap");
var react_twitter_embed_1 = require("react-twitter-embed");
var components_1 = require("../components");
var Canvas_1 = __importDefault(require("../components/Canvas"));
require("./index.css");
var data_1 = require("./../../constants/data");
var config_1 = __importDefault(require("./../../../../config"));
var __png_1 = __importDefault(require("./../../assets/*.png"));
var initialReport = {
    country: '__',
    flag: '__',
    cases: 0,
    deaths: 0,
    recovered: 0
};
var initialReports = {
    date: '2019-12-01',
    confirmed: 0,
    deaths: 0,
    recovered: 0
};
var Country = function () {
    var country = react_router_dom_1.useParams().country;
    var _a = react_1.useState(''), error = _a[0], setErrorMessage = _a[1];
    var _b = react_1.useState(['1222968733829865477']), tweets = _b[0], setTweets = _b[1];
    var _c = react_1.useState([initialReports]), reports = _c[0], setCountryReports = _c[1];
    var _d = react_1.useState(initialReport), report = _d[0], setCountryReport = _d[1];
    var getTweetsSince = function (_country) {
        data_1.countries.map(function (country) {
            if (country.name === _country) {
                axios_1.default
                    .get(config_1.default.SERVER_ENDPOINT + "/api/twitter/?trend=" + country.trend)
                    .then(function (response) {
                    var _tweets = response.data.tweets;
                    setTweets(_tweets);
                    // This is to eliminate i "is declared but its value is never read."
                    JSON.stringify(error);
                })
                    .catch(function (error) {
                    setTweets(['1222968733829865477']);
                    // This is to eliminate i "is declared but its value is never read."
                    JSON.stringify(tweets);
                    setErrorMessage(error);
                });
            }
        });
    };
    var getReportByCountry = function (country) {
        axios_1.default
            .get(config_1.default.SERVER_ENDPOINT + "/api/covid/country/" + country.toLocaleLowerCase())
            .then(function (response) {
            var _report = response.data.report;
            setCountryReport(_report);
        })
            .catch(function (error) { return setErrorMessage(error); });
    };
    var getCountryStatistics = function (country) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            axios_1.default
                .get(config_1.default.SERVER_ENDPOINT + "/api/covid/statistics/" + country)
                .then(function (response) {
                var _reports = response.data.reports;
                setCountryReports(_reports);
            })
                .catch(function (error) { return setErrorMessage(error); });
            return [2 /*return*/];
        });
    }); };
    react_1.useEffect(function () {
        getTweetsSince(country);
        getReportByCountry(country);
        getCountryStatistics(country);
    }, [country]);
    var flag = report.flag, cases = report.cases, deaths = report.deaths, recovered = report.recovered;
    if (['Uganda', 'Kenya', 'Tanzania', 'Rwanda', 'Burundi'].includes(country)) {
        return (react_1.default.createElement("div", { className: "container-fluid no-gutters px-0", style: { position: 'relative', overflow: 'scroll' } },
            react_1.default.createElement(components_1.Header, null),
            react_1.default.createElement("div", { className: "row content no-gutters" },
                react_1.default.createElement("div", { className: "col-sm-8" },
                    react_1.default.createElement("div", { className: "row", style: { margin: '1rem' } },
                        react_1.default.createElement("table", { className: "table table-hover table-striped" },
                            react_1.default.createElement("thead", { className: "thead-dark" },
                                react_1.default.createElement("tr", null,
                                    react_1.default.createElement("th", { colSpan: 2 }, "Country statistics"))),
                            react_1.default.createElement("tbody", null,
                                react_1.default.createElement("tr", null,
                                    react_1.default.createElement("td", null, "Country"),
                                    react_1.default.createElement("td", null,
                                        react_1.default.createElement("img", { src: flag, title: country + " flag", alt: "" + country, style: { maxHeight: '2rem' } }))),
                                react_1.default.createElement("tr", null,
                                    react_1.default.createElement("td", null, "Confirmed cases"),
                                    react_1.default.createElement("td", null, cases)),
                                react_1.default.createElement("tr", null,
                                    react_1.default.createElement("td", null, "Deaths"),
                                    react_1.default.createElement("td", null, deaths)),
                                react_1.default.createElement("tr", null,
                                    react_1.default.createElement("td", null, "Recovered"),
                                    react_1.default.createElement("td", null, recovered))))),
                    react_1.default.createElement(react_bootstrap_1.Row, { noGutters: true, id: "canvas" },
                        react_1.default.createElement(Canvas_1.default, { reports: reports }))),
                react_1.default.createElement("div", { className: "col-sm-4" }, data_1.countries.map(function (_country, index) {
                    if (_country.name == country) {
                        return (react_1.default.createElement(react_twitter_embed_1.TwitterTimelineEmbed, { sourceType: "profile", screenName: _country.org, options: { height: 600 }, key: index }));
                    }
                }))),
            react_1.default.createElement("img", { src: __png_1.default['who'], alt: "WHO Log", title: "Data provided by WHO", className: "img-fluid", id: "who_logo" })));
    }
    else {
        return react_1.default.createElement(react_router_dom_1.Redirect, { to: "/" });
    }
};
exports.default = Country;
