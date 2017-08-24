import {candidateReducer} from './candidate';
import {representativeReducer} from './representative';
import { combineReducers } from 'redux';


export default combineReducers({ candidates: candidateReducer ,
                                 representatives: representativeReducer});
