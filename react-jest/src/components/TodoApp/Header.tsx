import React, { Component } from "react";

interface IProps {
  addTodo: (text: string) => void;
}

interface IState {
  value: string;
}

class Header extends Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputKeyUp = this.handleInputKeyUp.bind(this);
    this.state = {
      value: ""
    };
  }

  handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      value: e.target.value
    });
  }

  handleInputKeyUp(e: React.KeyboardEvent) {
    const { value } = this.state;
    if (e.keyCode === 13 && value) {
      this.props.addTodo(value);
      this.setState({ value: "" });
    }
  }

  render() {
    const { value } = this.state;
    return (
      <div>
        TodoList
        <input
          placeholder="Add Todo"
          value={value}
          onChange={this.handleInputChange}
          onKeyUp={this.handleInputKeyUp}
        />
      </div>
    );
  }
}

export default Header;
