import React from "react";

// context 对象
export const globalContext = React.createContext();

export const globalData = {
  a: 1,
};

export const globalActions = (self) => ({
  add() {
    self.setState((state) => ({
      a: state.a + 1,
    }));
  },
  minus() {
    self.setState((state) => ({
      a: state.a - 1,
    }));
  },
});
