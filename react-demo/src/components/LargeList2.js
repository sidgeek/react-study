import React, { Fragment } from "react";
import { DynamicSizeList as List } from "react-window-dynamic";
import loremIpsum from "lorem-ipsum";
// import randomSentence from "random-sentence";

import "./styles.css";

// Polyfill ResizeObserver for demo
if (typeof ResizeObserver === "undefined") {
  global.ResizeObserver = require("resize-observer-polyfill").default;
}

// This example uses an array of random strings,
// But the list can also contain data that's async loaded, like images.
const items = new Array(500).fill(true).map(() => "****");

const Row = ({ data, index, style }) => (
  <div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
    {data[index]}
  </div>
);

const Example = () => (
  <Fragment>
    <List
      className="List"
      height={150}
      itemCount={items.length}
      itemData={items}
      width={300}
    >
      {Row}
    </List>
  </Fragment>
);

export default Example;
