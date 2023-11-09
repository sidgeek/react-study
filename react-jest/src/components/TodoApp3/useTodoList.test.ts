import { renderHook, act } from "@testing-library/react-hooks";
import useTodoList from "./useTodoList";

test("should use todoList", () => {
  const { result } = renderHook(() => useTodoList());

  expect(result.current.todoList).toEqual([]);
  expect(typeof result.current.addTodo).toBe("function");
});

test("should add todo", () => {
  const { result } = renderHook(() => useTodoList());
  act(() => {
    result.current.addTodo("study jest");
  });
  expect(result.current.todoList).toEqual(["study jest"]);
});
