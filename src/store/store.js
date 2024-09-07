import { createStore } from "redux";
import rootReducer from "../JS/Reducers/rootReducers";

const store = createStore(
    rootReducer
);

export default store;