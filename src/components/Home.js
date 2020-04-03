import React, { Component } from "react";
import { connect } from "react-redux";
import Autosuggest from "react-autosuggest";

import "./../styles/theme.css";

const logo = require("./../assets/header_logo.png");
const WHO = require("./../assets/who.png");
const about = require("./../assets/about.png");
const prevention = require("./../assets/prevention.png");
const treatment = require("./../assets/treatment.png");

const theme = {
  container: "_container",
  containerOpen: "_container--open",
  input: "_input",
  inputOpen: "_input--open",
  inputFocused: "_input--focused",
  suggestionsContainer: "_suggestions-container",
  suggestionsContainerOpen: "_suggestions-container--open",
  suggestionsList: "_suggestions-list",
  suggestion: "_suggestion",
  suggestionFirst: "_suggestion--first",
  suggestionHighlighted: "_suggestion--highlighted",
  sectionContainer: "_section-container",
  sectionContainerFirst: "_section-container--first",
  sectionTitle: "_section-title"
};

// Imagine you have a list of countries that you'd like to autosuggest.
const countries = [
  {
    name: "Uganda"
  },
  {
    name: "Kenya"
  },
  {
    name: "Tanzania"
  },
  {
    name: "Rwanda"
  },
  {
    name: "Burundi"
  }
];

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0
    ? []
    : countries.filter(
        country =>
          country.name.toLowerCase().slice(0, inputLength) === inputValue
      );
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => <div>{suggestion.name}</div>;

export class Home extends Component {
  constructor() {
    super();

    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state = {
      value: "",
      suggestions: []
    };
  }
  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };
  render() {
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: "Search by country (east africa)",
      value,
      onChange: this.onChange
    };

    // Finally, render it!
    return (
      <div>
        <header>
          <a href="/resources">Resources</a>
          <a href="/support">Support</a>
          <img
            src={logo}
            alt="COVID19EA Logo"
            title="COVID19EA Logo"
            id="header_logo"
          />
        </header>
        <div className="content commons_vertical">
          <div id="autosuggest" className="commons_vertical">
            <Autosuggest
              theme={theme}
              suggestions={suggestions}
              onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
              onSuggestionsClearRequested={this.onSuggestionsClearRequested}
              getSuggestionValue={getSuggestionValue}
              renderSuggestion={renderSuggestion}
              inputProps={inputProps}
            />
          </div>
          <div id="support_information">
            <div className="support_information_div">
              <div>
                <img
                  src={about}
                  alt="About COVID-19"
                  title="About COVID-19"
                  className="support_logos"
                />
              </div>
              <div className="information">
                <div className="info_header">About COVID-19</div>
                <span className="info">
                  An up-to-date rundown of the virus and its symptoms.
                </span>
                <a href="/aboutcovid">Learn more ...</a>
              </div>
            </div>
            <div className="support_information_div">
              <div>
                <img
                  src={prevention}
                  alt="Preventing COVID-19"
                  title="Preventing COVID-19"
                  className="support_logos"
                />
              </div>
              <div className="information">
                <div className="info_header">Prevention</div>
                <span className="info">
                  Information about social distancing, sanitizing, and more.
                </span>
                <a href="/prevention">Learn more ...</a>
              </div>
            </div>
            <div className="support_information_div">
              <div>
                <img
                  src={treatment}
                  alt="Treatment for COVID-19"
                  title="Treatment for COVID-19"
                  className="support_logos"
                />
              </div>
              <div className="information">
                <div className="info_header">Treatment</div>
                <span className="info">
                  Guidance on testing , keeping healthy and treatment
                </span>
                <a href="/treatment">Learn more ...</a>
              </div>
            </div>
          </div>
          <div id="about_website">
            <p>
              This website is a resource to help inform the public, in order to
              guide a response, improve care, and save lives.
            </p>
            <p>COVID19EA</p>
          </div>
        </div>

        <div id="who_logo">
          <img src={WHO} alt="WHO Log" title="Data provided by WHO" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
