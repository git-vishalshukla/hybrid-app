import { createStore } from "redux";
import rotateReducer from "./reducers/rotateReducer";

function store(state = {} ) {
  return createStore(rotateReducer,state);
}

export default store;
