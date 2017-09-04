import { GOT_CANDIDATES, REMOVE_CANDIDATE, SELECT_CANDIDATE, RESET_STATE, FILTER } from '../actions/appActionsCreators';
let initialState = {};
export const candidateReducer = (state = [], action) => {
  switch (action.type) {
    case GOT_CANDIDATES:
      initialState = action.candidates;
      return initialState;
    case REMOVE_CANDIDATE:
      return state.filter((candidate) => candidate.id !== action.id);
    case SELECT_CANDIDATE:
      return { ...state, selected: state.filter((candidate) => candidate.id == action.id)[0] };
    case FILTER:
      return state.filter((candidate) => candidate.id == action.filtered.candidate.id);
    case RESET_STATE:
      return initialState;
    default:
      return state;

  }
};

