import React from "react";
import { DynamicSizeList as List } from "react-window-dynamic";
import ChatMessage from "./ChatMessage";

const ChatHistory = ({ listHeight, chatHistory }) => {
  console.log("listHeight", listHeight);
  console.log("chatHistory.length", chatHistory.length);

  return (
    <div className="chatHistory">
      {chatHistory.length > 0 && (
        <List
          height={listHeight}
          itemCount={chatHistory.length}
          width="100%"
          // style={{ overflowX: "hidden" }}
        >
          {({ index, style }) => {
            console.log("style", style);
            return (
              <div style={style}>
                <ChatMessage message={chatHistory[index]} />
              </div>
            );
          }}
        </List>
      )}
    </div>
  );
};

export default ChatHistory;
