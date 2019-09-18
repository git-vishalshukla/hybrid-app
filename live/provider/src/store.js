import {createStore, combineReducers, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import user from "./reducers/reducer";

const logger = createLogger({});

export default createStore(
	combineReducers({user}),
	{},
	applyMiddleware(logger, thunk, promise())
);