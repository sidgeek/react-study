import React from "react";
import { ChatContext } from "./ChatHistory";

const ChatMessage = ({ message, index }) => {
  const { text } = message;
  const { setSize, windowWidth } = React.useContext(ChatContext);
  const root = React.useRef();
  React.useEffect(() => {
    const myHeight = root.current.getBoundingClientRect().height;
    setSize(index, myHeight);
  }, [windowWidth]);

  const handleClick = React.useCallback(() => {
    const myHeight = root.current.getBoundingClientRect().height;
    console.log("myHeight:", myHeight);
  }, []);

  return (
    <div ref={root} className="message" onClick={handleClick}>
      {text}
    </div>
  );
};
export default ChatMessage;
