"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Native modules
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var react_bootstrap_1 = require("react-bootstrap");
var components_1 = require("../components");
require("./index.css");
var __png_1 = __importDefault(require("./../../assets/*.png"));
var Home = function () {
    return (react_1.default.createElement("div", { className: "container-fluid no-gutters px-0", style: { position: 'relative', overflow: 'scroll' } },
        react_1.default.createElement(components_1.Header, null),
        react_1.default.createElement("div", { className: "content" },
            react_1.default.createElement(components_1.AutoSuggest, null),
            react_1.default.createElement(react_bootstrap_1.Row, { noGutters: true, id: "support_information", className: "commons_horizontal" },
                react_1.default.createElement("div", { className: "col-sm support_information_div" },
                    react_1.default.createElement("img", { src: __png_1.default['about'], alt: "About COVID-19", title: "About COVID-19", className: "img-fluid", id: "support_logos_one" }),
                    react_1.default.createElement("div", { className: "col information" },
                        react_1.default.createElement("div", { className: "info_header" }, "About COVID-19"),
                        react_1.default.createElement("span", { className: "info" }, "An up-to-date rundown of the virus and its symptoms."),
                        react_1.default.createElement("a", { href: "/aboutcovid" }, "Learn more ..."))),
                react_1.default.createElement("div", { className: "col-sm support_information_div" },
                    react_1.default.createElement("img", { src: __png_1.default['prevention'], alt: "Preventing COVID-19", title: "Preventing COVID-19", className: "img-fluid", id: "support_logos_two" }),
                    react_1.default.createElement("div", { className: "col information" },
                        react_1.default.createElement("div", { className: "info_header" }, "Prevention"),
                        react_1.default.createElement("span", { className: "info" }, "Information about social distancing, sanitizing, and more."),
                        react_1.default.createElement("a", { href: "/prevention" }, "Learn more ..."))),
                react_1.default.createElement("div", { className: "col-sm support_information_div" },
                    react_1.default.createElement("img", { src: __png_1.default['treatment'], alt: "Treatment for COVID-19", title: "Treatment for COVID-19", className: "img-fluid", id: "support_logo_three" }),
                    react_1.default.createElement("div", { className: "col information" },
                        react_1.default.createElement("div", { className: "info_header" }, "Treatment"),
                        react_1.default.createElement("span", { className: "info" }, "Guidance on testing, keeping healthy and treatment"),
                        react_1.default.createElement("a", { href: "/treatment" }, "Learn more ...")))),
            react_1.default.createElement(react_bootstrap_1.Row, { noGutters: true, id: "about_website", className: "commons_vertical" },
                react_1.default.createElement("p", null, "This website is a resource to help inform the public, in order to guide a response, improve care, and save lives."),
                react_1.default.createElement("p", { style: { fontWeight: 'bold' } }, "COVID19EA"))),
        react_1.default.createElement("img", { src: __png_1.default['who'], alt: "WHO Log", title: "Data provided by WHO", className: "img-fluid", id: "who_logo" })));
};
exports.default = react_router_dom_1.withRouter(Home);
