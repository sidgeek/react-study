import React from "react";
import { render } from "./comm";
import TodoList, { TodoItem } from "./TodoList";
import { useAddTodo, useSetTodoList } from "./store/use-todoList";
import { act } from "react-dom/test-utils";
// import store from "./store";

let addTodo: any;
let setTodoList: any;

beforeAll(() => {
  const Component = () => {
    addTodo = useAddTodo();
    setTodoList = useSetTodoList();
    return <TodoList />;
  };

  render(<Component />);
});

beforeEach(() => {
  act(() => {
    setTodoList([]);
  });
});

// afterEach(() => {
//   wrapper.detach();
//   console.log(store.getState().todoList);
// });

it("renders success", () => {
  render(<TodoList />);
});

it("addTod success", () => {
  const wrapper = render(<TodoList />);

  expect(wrapper.find(TodoItem).length).toBe(0);

  act(() => {
    addTodo("learn1");
    addTodo("learn2");
  });
  wrapper.update();
  expect(wrapper.find(TodoItem).length).toBe(2);
});

it("renders with initialState from the store", () => {
  const wrapper = render(<TodoList />);
  console.log(wrapper.find(TodoItem).length);
});
