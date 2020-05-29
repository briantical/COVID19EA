import {
  SET_TYPING_VALUE,
  SET_TYPING_SUGGESTIONS,
  SET_COUNTRY_REPORT,
  SET_COUNTRY_REPORTS,
  SET_ERROR_MESSAGE
} from '../constants/action-types';

export const setTypingValue = (value: string) => ({
  type: SET_TYPING_VALUE,
  payload: value
});

export const setTypingSuggestions = (suggestions) => ({
  type: SET_TYPING_SUGGESTIONS,
  payload: suggestions
});

export const setCountryReport = (report) => ({
  type: SET_COUNTRY_REPORT,
  payload: report
});

export const setCountryReports = (reports) => ({
  type: SET_COUNTRY_REPORTS,
  payload: reports
});

export const setErrorMessage = (error) => ({
  type: SET_ERROR_MESSAGE,
  payload: error
});