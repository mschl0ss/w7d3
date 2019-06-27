import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from '../middleware/thunk'

import rootReducer from '../reducers/root_reducer';

const configureStore = (predefinedState = {}) => (
  createStore(
    rootReducer,
    predefinedState,
    applyMiddleware(thunk, logger)
  )
);

export default configureStore;