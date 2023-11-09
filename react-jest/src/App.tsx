import React from "react";
import TodoList from "./components/TodoApp5/TodoList";

import store from "./components/TodoApp5/store";
import { StoreContext } from "redux-react-hook";

const App: React.FC = () => {
  return (
    <div>
      <StoreContext.Provider value={store}>
        <TodoList></TodoList>
      </StoreContext.Provider>
    </div>
  );
};

export default App;
