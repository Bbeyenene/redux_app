import { combineReducers } from "redux";
import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import postReducer from "./postReducer";

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  posts: postReducer,
});

export default allReducers;
