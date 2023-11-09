import React, { Component } from "react";
import Father from "./Father";
import { globalContext, globalData, globalActions } from "./global";

const { Provider } = globalContext;

export default class ContextTest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...globalData,
      ...globalActions(this),
    };
  }

  render() {
    console.log("dg>> ContextTest render");

    return (
      <Provider value={this.state}>
        <div>
          <h1> 我是 ContextTest 组件 </h1>
          <Father />
        </div>
      </Provider>
    );
  }
}
