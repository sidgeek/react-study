import React from "react";
// import { renderHook, act } from "@testing-library/react-hooks";
import { clearFunc, getText, initFunc, render } from "./comm";
import { mount, shallow } from "enzyme";
import TodoList from "./TodoList";
import useTodoList from "./useTodoList";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";

// let todoList: any;

// beforeEach(() => {
//   initFunc();
// });

// afterEach(() => {
//   clearFunc();
// });

it("renders with initialState from the store", () => {
  // let addTodo: any;
  // const Component = () => {
  //   const { todoList } = useTodoList();
  //   addTodo = useTodoList().addTodo;
  //   return <div>{todoList}</div>;
  // };
  // const wrapper = mount(<Component />);
  // console.log(wrapper.state());
});

// test("should add todo", () => {
//   // act(() => {
//   //   ReactDOM.render(<TodoList />, container);
//   // });
//   // const wrapper = mount(<TodoList />);
//   // // console.log(wrapper.state("addTodo"));
//   // act(() => {
//   //   // console.log(wrapper.state.addTodo(""));
//   // });
//   // addTodo()
//   // console.log(wrapper);
//   // const { result } = renderHook(() => useTodoList(["first task"]));
//   // act(() => {
//   //   result.current.addTodo("study jest");
//   // });
//   // expect(result.current.todoList).toEqual(["first task", "study jest"]);
// });
