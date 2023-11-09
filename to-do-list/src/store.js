import { createStore } from "redux";
import rootReducer from "./reducers";
import { addTodo, toggleTodo, setFilter, setTodoText } from "./actions";

const store = createStore(rootReducer);

console.log(store.getState());

// 订阅store的变化
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// 发生action
store.dispatch(addTodo("123"));
store.dispatch(toggleTodo(0));
store.dispatch(setFilter(0));
store.dispatch(setTodoText("456"));

// 取消订阅
unsubscribe();
