import React, { Component } from "react";
import Son from "./Son";

export default class Father extends Component {
  render() {
    return (
      <div>
        <h2>我是 Father </h2>

        <Son />
      </div>
    );
  }
}
