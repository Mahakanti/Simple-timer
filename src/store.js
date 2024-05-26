import { createStore } from "redux";
const { timerReducer } = require("./redux/reducers/timerReducer");

export const store = createStore(timerReducer);
