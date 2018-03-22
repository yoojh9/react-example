import { combineReducers } from 'redux';
import counter from "./Counter";
import ui from "./ui"

// reducer 합치기
const reducers = combineReducers({
  counter, ui
});

export default reducers;
