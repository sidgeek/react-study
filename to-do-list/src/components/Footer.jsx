import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    const { filter, setFilter: setVisibilityFilter } = this.props;
    return (
      <div>
        <span>Show:</span>
        <button
          onClick={() => setVisibilityFilter("all")}
          disabled={filter === "all"}
        >
          All
        </button>
        <button
          onClick={() => setVisibilityFilter("active")}
          disabled={filter === "active"}
        >
          Active
        </button>
        <button
          onClick={() => setVisibilityFilter("completed")}
          disabled={filter === "completed"}
        >
          Completed
        </button>
      </div>
    );
  }
}
