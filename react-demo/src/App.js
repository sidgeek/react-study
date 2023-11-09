import logo from "./logo.svg";
import "./App.css";
import BlinkyRender from "./components/BlinkyRender";
import LargeList from "./components/LargeList";
import LargeList2 from "./components/LargeList2";
import ContextTest from "./components/ContextTest";
import ContextTest2 from "./components/ContextTest2";
import Chat from "./components/Chat";
import ChatClass from "./components/ChatClass";
import UseMemoTest from "./components/UseMemoTest";
import MyChat from "./components/MyChat";

function App() {
  return (
    <div className="App">
      {/* <BlinkyRender /> */}
      {/* <LargeList /> */}
      {/* <ContextTest /> */}
      {/* <ChatClass /> */}
      <MyChat />
    </div>
  );
}

export default App;
