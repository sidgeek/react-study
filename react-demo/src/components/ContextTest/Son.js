import React, { Component } from "react";
import { globalContext } from "./global";

const { Consumer } = globalContext;

export default class Son extends Component {
  add1() {
    this.context.add();
  }

  minus1() {
    this.context.minus();
  }

  render() {
    return (
      <div>
        <h2> I am son</h2>
        <h3> {this.context.a}</h3>
        <button onClick={this.add1.bind(this)}> 加1 </button>
        <button onClick={this.minus1.bind(this)}> 减1 </button>
      </div>
    );
  }
}

Son.contextType = globalContext;

//  <Consumer>{(value) => <h3> {value.a}</h3>}</Consumer>
