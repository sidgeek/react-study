import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

// import { config } from "../config";
import reducer from "./reducers";

// const store = config().compileWithDevTools
//   ? createStore(reducer, composeWithDevTools())
//   : createStore(reducer);

const store = createStore(reducer, composeWithDevTools());

export default store;

export type StoreType = ReturnType<typeof reducer>;
