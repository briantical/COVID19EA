"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var containers_1 = require("../containers");
var Index = function () {
    return (react_1.default.createElement(react_router_dom_1.Switch, null,
        react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: containers_1.Home }),
        react_1.default.createElement(react_router_dom_1.Route, { path: "/country/:country", component: containers_1.Country }),
        react_1.default.createElement(react_router_dom_1.Route, { path: "/region", component: containers_1.Region }),
        react_1.default.createElement(react_router_dom_1.Route, { path: "*", component: containers_1.NoMatch })));
};
exports.default = Index;
