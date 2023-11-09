// tslint:disable-next-line: no-implicit-dependencies
import React from "react";
import { StoreContext } from "redux-react-hook";
import { mount } from "enzyme";
import store from "./store";
// import { createStore } from "redux";

export function render(element: React.ReactElement<any>) {
  // const newStore = createStore(rootReducer);
  return mount(
    <StoreContext.Provider value={store}>{element}</StoreContext.Provider>
  );
}

// function add(a: number, b: number);
// function add(a: string, b: string);
// function add(a: any, b: any);

// function add(a: any, b: any) {
//   return a + b;
// }
