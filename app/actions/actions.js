import { GET_RESULTS } from '../constants/ActionTypes';

export function getResults(text) {
  return { type: GET_RESULTS };
}