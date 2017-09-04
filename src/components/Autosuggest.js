import Autosuggest from 'react-autosuggest';
import React, { Component } from 'react';

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters

export default class Searchbox extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: []
    };
  }
  escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
  getSuggestions(value) {
    const escapedValue = this.escapeRegexCharacters(value.trim());

    if (escapedValue === '') {
      return [];
    }

    const regex = new RegExp('^' + escapedValue, 'i');

    return this.props.candidates.filter((candidate) => regex.test(candidate.name));
  }

  getSuggestionValue(suggestion) {
    return suggestion.name;
  }
  renderSuggestion(suggestion) {
    return (
      <span>{suggestion.name}</span>
    );
  }
  updateList(suggestion){
    this.props.filterList(suggestion);
  }
  onChange = (event, { newValue, method }) => {
    if (newValue === '') {
      this.props.reloadList();
    }
    this.setState({
      value: newValue
    });

  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };
  onSuggestionSelected = (event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method })=>{
  this.updateList(suggestion);
};
  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: 'search for candidate ...',
      value,
      onChange: this.onChange
    };

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={this.getSuggestionValue}
        onSuggestionSelected={this.onSuggestionSelected}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps} />
    );
  }
}