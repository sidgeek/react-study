import React, { useState } from "react";
import Header from "./Header";

export default function TodoList() {
  const [todoList, setTodoList] = useState<string[]>([]);

  const addTodo = (text: string) => {
    setTodoList([...todoList, text]);
  };

  return (
    <div style={{ marginLeft: "100px" }}>
      <Header addTodo={addTodo} />
      {todoList.map((item, index) => {
        return <div key={index}>{item}</div>;
      })}
    </div>
  );
}
