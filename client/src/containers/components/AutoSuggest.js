// Native modules
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Autosuggest from "react-autosuggest";

import { setTypingSuggestions, setTypingValue } from "./../../actions";

// Custom autosugggest stlying theme
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
  sectionTitle: "_section-title",
};

// The list of countries that you'd like to autosuggest.
const countries = [
  {
    name: "Burundi",
  },
  {
    name: "Kenya",
  },
  {
    name: "Rwanda",
  },
  {
    name: "Tanzania",
  },
  {
    name: "Uganda",
  },
];

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = (value) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0
    ? []
    : countries.filter(
        (country) =>
          country.name.toLowerCase().slice(0, inputLength) === inputValue
      );
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = (suggestion) => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = (suggestion) => <div>{suggestion.name}</div>;

export class AutoSuggest extends Component {
  onChange = (event, { newValue }) => {
    this.props.setTypingValue(newValue);
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.props.setTypingSuggestions(getSuggestions(value));
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.props.setTypingSuggestions([]);
  };

  render() {
    const { history, typing: value, suggestions } = this.props;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: "Search by country (east africa)",
      value,
      onChange: this.onChange,
    };

    // Finally, render it!
    return (
      <div className="content commons_vertical">
        <div id="autosuggest" className="commons_vertical">
          <Autosuggest
            theme={theme}
            suggestions={suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            onSuggestionSelected={(event, { suggestionValue }) =>
              history.push("/country/" + suggestionValue)
            }
            inputProps={inputProps}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { typing, suggestions } = state;
  return { typing, suggestions };
};

const mapDispatchToProps = {
  setTypingSuggestions,
  setTypingValue,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AutoSuggest));
