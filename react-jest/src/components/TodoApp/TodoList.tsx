import React, { Component } from "react";
import Header from "./Header";

interface IProps {}

interface IState {
  todoList: string[];
}

export default class TodoList extends Component<IProps, IState> {
  public state: IState;

  constructor(props: any) {
    super(props);
    this.addTodo = this.addTodo.bind(this);
    this.state = {
      todoList: []
    };
  }

  addTodo(text: string) {
    this.setState({
      todoList: [...this.state.todoList, text]
    });
  }

  render() {
    return (
      <div style={{ marginLeft: "100px" }}>
        <Header addTodo={this.addTodo} />
        {this.state.todoList.map((item, index) => {
          return <div key={index}>{item}</div>;
        })}
      </div>
    );
  }
}
