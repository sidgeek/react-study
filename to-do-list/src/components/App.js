import React, { Component } from "react";
import AddTodoC from "../containers/AddTodoC";
import TodoListC from "../containers/TodoListC";
import FooterC from "../containers/FooterC";

export default class App extends Component {
  render() {
    return (
      <div>
        <AddTodoC />
        <TodoListC />
        <FooterC />
      </div>
    );
  }
}
