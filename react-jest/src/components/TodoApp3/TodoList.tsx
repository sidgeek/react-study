import React from "react";
import Header from "./Header";
import useTodoList from "./useTodoList";

export default function TodoList() {
  const { todoList, addTodo } = useTodoList();

  return (
    <div style={{ marginLeft: "100px" }}>
      <Header addTodo={addTodo} />
      {todoList.map((item, index) => {
        return <div key={index}>{item}</div>;
      })}
    </div>
  );
}
