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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Native modules
var react_1 = __importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var react_autosuggest_1 = __importDefault(require("react-autosuggest"));
var react_bootstrap_1 = require("react-bootstrap");
var data_1 = require("./../../constants/data");
// Custom autosugggest stlying theme
var theme = {
    container: '_container',
    containerOpen: '_container--open',
    input: '_input',
    inputOpen: '_input--open',
    inputFocused: '_input--focused',
    suggestionsContainer: '_suggestions-container',
    suggestionsContainerOpen: '_suggestions-container--open',
    suggestionsList: '_suggestions-list',
    suggestion: '_suggestion',
    suggestionFirst: '_suggestion--first',
    suggestionHighlighted: '_suggestion--highlighted',
    sectionContainer: '_section-container',
    sectionContainerFirst: '_section-container--first',
    sectionTitle: '_section-title'
};
// Teach Autosuggest how to calculate suggestions for any given input value.
var getSuggestions = function (value) {
    var inputValue = value.trim().toLowerCase();
    var inputLength = inputValue.length;
    return inputLength === 0
        ? []
        : data_1.countries.filter(function (country) { return country.name.toLowerCase().slice(0, inputLength) === inputValue; });
};
// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
var getSuggestionValue = function (suggestion) { return suggestion.name; };
// Use your imagination to render suggestions.
var renderSuggestion = function (suggestion) { return react_1.default.createElement("div", null, suggestion.name); };
var initialSuggestions = [{ name: '', trend: '' }];
var AutoSuggest = function () {
    var history = react_router_dom_1.useHistory();
    var _a = react_1.useState(''), value = _a[0], setTypingValue = _a[1];
    var _b = react_1.useState(initialSuggestions), suggestions = _b[0], setTypingSuggestions = _b[1];
    var onChange = function (_event, _a) {
        var newValue = _a.newValue;
        setTypingValue(newValue);
    };
    // Autosuggest will call this function every time you need to update suggestions.
    // You already implemented this logic above, so just use it.
    var onSuggestionsFetchRequested = function (_a) {
        var value = _a.value;
        setTypingSuggestions(getSuggestions(value));
    };
    // Autosuggest will call this function every time you need to clear suggestions.
    var onSuggestionsClearRequested = function () {
        setTypingSuggestions([]);
    };
    // Autosuggest will pass through all these props to the input.
    var inputProps = {
        placeholder: 'Search by country (east africa)',
        value: value,
        onChange: onChange
    };
    // Finally, render it!
    return (react_1.default.createElement(react_bootstrap_1.Row, { id: "autosuggest", className: "commons_vertical" },
        react_1.default.createElement(react_autosuggest_1.default, { theme: theme, suggestions: suggestions, onSuggestionsFetchRequested: onSuggestionsFetchRequested, onSuggestionsClearRequested: onSuggestionsClearRequested, getSuggestionValue: getSuggestionValue, renderSuggestion: renderSuggestion, onSuggestionSelected: function (_event, _a) {
                var suggestionValue = _a.suggestionValue;
                return history.push('/country/' + suggestionValue);
            }, inputProps: inputProps })));
};
exports.default = AutoSuggest;
