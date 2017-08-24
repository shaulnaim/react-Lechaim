import { GOT_REPRESENTATIVES, REMOVE_REPRESENTATIVE, SELECT_REPRESENTATIVE, RESET_STATE } from "../actions/appActionsCreators"
let initialState = {};
export const representativeReducer = (state = [], action) => {
  switch (action.type) {
    case GOT_REPRESENTATIVES:
      initialState = action.representatives;
      return initialState;
    case REMOVE_REPRESENTATIVE:
      return state.filter(representative => representative.id !== action.id);
    case SELECT_REPRESENTATIVE:
      return { ...state, selected: state.filter(representative => representative.id == action.id)[0] };
    case RESET_STATE:
      return initialState;
    default:
      return state;

  }
}