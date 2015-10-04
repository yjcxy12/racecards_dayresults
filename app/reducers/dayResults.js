import { GET_RESULTS } from '../constants/ActionTypes';
import MockResults from '../test/testData';

const initialState = [];

export default function dayResults(state = initialState, action) {
  switch (action.type) {
    case GET_RESULTS:
      return MockResults;
    default:
      return state;
  }
}