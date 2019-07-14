import React, { Component } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import Footer from "./Footer";

const todos = [
  {
    id: 1,
    text: "aaa",
    completed: true
  },
  {
    id: 2,
    text: "bbb",
    completed: true
  },
  {
    id: 3,
    text: "ccc",
    completed: false
  }
];

const filter = "all";
export default class App extends Component {
  render() {
    return (
      <div>
        <AddTodo />
        <TodoList todos={todos} />
        <Footer filter={filter} />
      </div>
    );
  }
}
