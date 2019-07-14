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
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      filter: "all"
    };
  }

  getVisableTodos = () => {
    const currentFilter = this.state.filter;
    return this.state.todos.filter(item => {
      if (currentFilter === "active") {
        return !item.completed;
      } else if (currentFilter === "completed") {
        return item.completed;
      } else {
        return true;
      }
    });
  };

  render() {
    const todos = this.getVisableTodos();
    const { filter } = this.state;
    return (
      <div>
        <AddTodo />
        <TodoList todos={todos} />
        <Footer filter={filter} />
      </div>
    );
  }
}
