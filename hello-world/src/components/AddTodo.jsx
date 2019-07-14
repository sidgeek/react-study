import React, { Component } from "react";

export default class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  handerClick = () => {
    this.props.addTodo(this.state.text);
  };

  haderChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.text}
          onChange={this.haderChange}
        />
        <button onClick={this.handerClick}>Add</button>
      </div>
    );
  }
}
