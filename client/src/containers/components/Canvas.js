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
var react_1 = __importDefault(require("react"));
var react_apexcharts_1 = __importDefault(require("react-apexcharts"));
var getDays = function (reports) {
    var cases = [];
    reports.map(function (report) {
        var date = report.date;
        cases = __spreadArrays(cases, [date]);
    });
    return cases;
};
var getMaximumHeight = function (cases) {
    return Math.max.apply(Math, cases);
};
var getMinimumHeight = function (cases) {
    return Math.min.apply(Math, cases);
};
var getRecoveredCases = function (reports) {
    var cases = { name: 'Recovered', data: [] };
    var data = cases.data;
    reports.map(function (report) {
        var recovered = report.recovered;
        data = __spreadArrays(data, [recovered]);
    });
    cases = { name: 'Recovered', data: data };
    return cases;
};
var getDeathCases = function (reports) {
    var cases = { name: 'Deaths', data: [] };
    var data = cases.data;
    reports.map(function (report) {
        var deaths = report.deaths;
        data = __spreadArrays(data, [deaths]);
    });
    cases = { name: 'Deaths', data: data };
    return cases;
};
var getConfirmedCases = function (reports) {
    var cases = { name: 'Confirmed', data: [] };
    var data = cases.data;
    reports.map(function (report) {
        var confirmed = report.confirmed;
        data = __spreadArrays(data, [confirmed]);
    });
    cases = { name: 'Confirmed', data: data };
    return cases;
};
var Canvas = function (props) {
    var reports = props.reports;
    var series = [getConfirmedCases(reports), getRecoveredCases(reports), getDeathCases(reports)];
    var options = {
        chart: {
            height: 350,
            type: 'line',
            dropShadow: {
                enabled: true,
                color: '#000',
                top: 18,
                left: 7,
                blur: 10,
                opacity: 0.2
            },
            toolbar: {
                show: false
            }
        },
        colors: ['#77B6EA', '#adff2f', '#ff0000'],
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            width: 2
        },
        title: {
            text: 'Coronavirus statistics',
            align: 'left'
        },
        grid: {
            borderColor: '#e7e7e7',
            row: {
                colors: ['#f3f3f3', 'transparent'],
                opacity: 0.5
            }
        },
        markers: {
            size: 0
        },
        xaxis: {
            categories: getDays(reports),
            title: {
                text: 'Days'
            }
        },
        yaxis: {
            title: {
                text: 'Cases'
            },
            min: getMinimumHeight(getConfirmedCases(reports).data),
            max: getMaximumHeight(getConfirmedCases(reports).data)
        },
        legend: {
            position: 'top',
            horizontalAlign: 'right',
            floating: true,
            offsetY: -25,
            offsetX: -5
        }
    };
    return (react_1.default.createElement("div", { className: "row no-gutters commons_vertical", style: { width: '100%' } },
        react_1.default.createElement(react_apexcharts_1.default, { options: options, series: series, type: "line", width: "600" })));
};
exports.default = Canvas;
