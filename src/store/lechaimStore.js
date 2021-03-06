import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import indexReducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export default createStore(
  indexReducer,
  composeWithDevTools(
    applyMiddleware(thunk, logger)
    // other store enhancers if any 
  ));
