import React from "react";

const ChatMessage = ({ message }) => {
  const { text } = message;
  return (
    <div className="message">
      {text}
    </div>
  );
};
export default ChatMessage;
