import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NewTicket from "./pages/newTicket";
import { TestContext } from "./contexts/global";
import "./App.css";

const Header: React.FC = () => (
  <div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </div>
);

const SelfRouter: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/newTicket" component={NewTicket} />
        {/* <Route exact path="/" render={Home} />
        <Route exact path="/about" render={() => <About />} /> */}
      </div>
    </Router>
  );
};

const App: React.FC = () => {
  return (
    <TestContext.Provider value={{ number: 1 }}>
      <SelfRouter />
    </TestContext.Provider>
  );
};

export default App;
