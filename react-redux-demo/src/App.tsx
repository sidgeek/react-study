import "./App.css";
import store from "./store/store";
import { StoreContext } from "redux-react-hook";
import DashBoard from "./view/DashBoard";
import { Count1Provider, Count2Provider } from "./context";
import { CountProvider } from "./context2";

function App() {
  return (
    <CountProvider>
      <Count1Provider>
        <Count2Provider>
          <StoreContext.Provider value={store}>
            <div className="App">
              <DashBoard />
            </div>
          </StoreContext.Provider>
        </Count2Provider>
      </Count1Provider>
    </CountProvider>
  );
}

export default App;
