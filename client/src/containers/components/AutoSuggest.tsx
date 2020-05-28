// Native modules
import React, { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Autosuggest from 'react-autosuggest';
import { Row } from 'react-bootstrap';

import { countries } from './../../constants/data';

// Custom autosugggest stlying theme
const theme = {
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
const getSuggestions = (value: string) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0
    ? []
    : countries.filter((country) => country.name.toLowerCase().slice(0, inputLength) === inputValue);
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = (suggestion: ISuggestions) => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = (suggestion: ISuggestions) => <div>{suggestion.name}</div>;

interface ISuggestions {
  name: string;
  trend: string;
}

const initialSuggestions: ISuggestions[] = [{ name: '', trend: '' }];

const AutoSuggest: FC<{}> = () => {
  const history = useHistory();

  const [value, setTypingValue] = useState('');
  const [suggestions, setTypingSuggestions] = useState<ISuggestions[]>(initialSuggestions);

  const onChange = (_event: React.ChangeEvent, { newValue }: { newValue: string }) => {
    setTypingValue(newValue);
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  const onSuggestionsFetchRequested = ({ value }: { value: string }) => {
    setTypingSuggestions(getSuggestions(value));
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  const onSuggestionsClearRequested = () => {
    setTypingSuggestions([]);
  };

  // Autosuggest will pass through all these props to the input.
  const inputProps = {
    placeholder: 'Search by country (east africa)',
    value,
    onChange: onChange
  };

  // Finally, render it!
  return (
    <Row id="autosuggest" className="commons_vertical">
      <Autosuggest
        theme={theme}
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        onSuggestionSelected={(_event: any, { suggestionValue }) => history.push('/country/' + suggestionValue)}
        inputProps={inputProps}
      />
    </Row>
  );
};

export default AutoSuggest;
