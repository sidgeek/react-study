import { combineReducers, createStore } from "redux";
import { todoListReducer } from "./todoListReducer";
// import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  todoList: todoListReducer
});

const store = createStore(rootReducer);

export default store;
export type StoreType = ReturnType<typeof rootReducer>;
