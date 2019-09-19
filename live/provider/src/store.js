import {createStore, combineReducers, applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import configState from "./reducers";

export default createStore(
	combineReducers({configState}),
	{},
	applyMiddleware(thunk, promise,logger)
);