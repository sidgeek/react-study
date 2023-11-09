import React, { Component } from "react";

export default class AddTodo extends Component {
  handerClick = () => {
    this.props.addTodo(this.props.text);
  };

  haderChange = e => {
    this.props.setTodoText(e.target.value);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.text}
          onChange={this.haderChange}
        />
        <button onClick={this.handerClick}>Add</button>
      </div>
    );
  }
}
