import { candidateReducer } from './candidate';
import { representativeReducer } from './representative';
import { loginReducer } from './login';
import { combineReducers } from 'redux';


export default combineReducers({
  candidates: candidateReducer,
  representatives: representativeReducer,
  login: loginReducer
});
