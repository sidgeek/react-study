import React, { useState } from "react";
import ChatHistory from "./ChatHistory";
import randomSentence from "random-sentence";
import "./styles.css";

const getInitData = (num) => {
  return Array(num)
    .fill(0)
    .map((_) => ({ text: randomSentence(500, 1000) }));
};

export default function Chat() {
  const chatHistory = useState(getInitData(20))[0];

  return <ChatHistory listHeight={200} chatHistory={chatHistory} />;
}
