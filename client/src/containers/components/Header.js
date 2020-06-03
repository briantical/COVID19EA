"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var react_bootstrap_1 = require("react-bootstrap");
var __png_1 = __importDefault(require("./../../assets/*.png"));
var Header = function () {
    return (react_1.default.createElement(react_bootstrap_1.Row, { noGutters: true, className: "align-items-center justify-content-end", id: "header" },
        react_1.default.createElement(react_bootstrap_1.Col, null),
        react_1.default.createElement(react_bootstrap_1.Col, { className: "col-2 commons_vertical" },
            react_1.default.createElement(react_router_dom_1.Link, { to: "/resources" }, "Resources")),
        react_1.default.createElement(react_bootstrap_1.Col, { className: "col-2 commons_vertical" },
            react_1.default.createElement(react_router_dom_1.Link, { to: "/support" }, "Support")),
        react_1.default.createElement(react_bootstrap_1.Col, { className: "col-3 commons_vertical" },
            react_1.default.createElement(react_router_dom_1.Link, { to: "/", style: { width: '100%' } },
                react_1.default.createElement("img", { className: "img-fluid", src: __png_1.default['header_logo'], alt: "COVID19EA Logo", title: "COVID19EA Logo", id: "header_logo" })))));
};
exports.default = Header;
