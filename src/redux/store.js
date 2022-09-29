import { createStore } from "react-redux";
import rootReducers from "./reducer";

const store = createStore(rootReducers);

export default store;