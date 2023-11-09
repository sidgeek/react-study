// tslint:disable-next-line: no-implicit-dependencies
import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { StoreContext } from "redux-react-hook";
// import { renderHook, act } from "@testing-library/react-hooks";
import { mount, shallow } from "enzyme";
// import store from "../store";

// let subscriberCallbacks: Array<() => void> = [];
// let cancelSubscription: () => void;
let reactRoot: HTMLDivElement;

export function render(element: React.ReactElement<any>) {
  //   act(() => {
  //     // ReactDOM.render(
  //     //   <StoreContext.Provider value={""}>{element}</StoreContext.Provider>,
  //     //   reactRoot
  //     // );

  //     mount(<StoreContext.Provider value={""}>{element}</StoreContext.Provider>);
  //   });
  mount(<StoreContext.Provider value={""}>{element}</StoreContext.Provider>);
}

export function getText() {
  return reactRoot.textContent;
}

export function initFunc() {
  reactRoot = document.createElement("div");
  document.body.appendChild(reactRoot);
}

export function clearFunc() {
  document.body.removeChild(reactRoot);
}
