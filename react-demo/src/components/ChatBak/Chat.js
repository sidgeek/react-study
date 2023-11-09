import React, { useRef, useState, useEffect } from "react";
import ChatHistory from "./ChatHistory";
import randomSentence from "random-sentence";
import "./styles.css";

const getInitData = (num) => {
  return Array(num)
    .fill(0)
    .map((_) => ({ text: randomSentence(500, 1000) }));
};

export default function Chat() {
  const listRef = useRef(null);

  const chatHistory = useState(getInitData(8))[0];

  useEffect(() => {
    console.log("listRef", listRef);
    listRef.current.resetAfterIndex(0);
    // listRef.current.resetAfterIndex(0);
  }, [listRef]);

  return (
    <ChatHistory
      listRef={listRef}
      listHeight={200}
      chatHistory={chatHistory}
    />
  );
}
