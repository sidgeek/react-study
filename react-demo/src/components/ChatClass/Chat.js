import React, { Component, createRef } from "react";
import ChatHistory from "./ChatHistory";
import randomSentence from "random-sentence";
import "./styles.css";

const getInitData = (num) => {
  return Array(num)
    .fill(0)
    .map((_) => ({ text: randomSentence(500, 1000) }));
};

const getSignalData = () => {
  return { text: randomSentence(500, 1000) };
};

const InitNum = 5;
const LimitNum = 8;

class Chat extends Component {
  constructor(props) {
    super(props);
    this.listRef = createRef();
    this.chatHistoryRef = createRef();
    this.state = {
      chatHistory: getInitData(InitNum),
    };
  }

  componentDidMount() {
    this.startChatMessages();
    this.listRef.current.resetAfterIndex(0);
  }

  startChatMessages = () => {
    setInterval(() => {
      const { chatHistory } = this.state;
      chatHistory.push(getSignalData());
      if (chatHistory.length < LimitNum) {
        this.setState(() => ({ chatHistory }), this.handleScroll);
      }
    }, 500);
  };
  handleScroll = () => {
    const { chatHistory } = this.state;
    this.listRef.current.resetAfterIndex(0);
    this.listRef.current.scrollToItem(chatHistory.length - 1, "end");
  };
  render() {
    const { chatHistory } = this.state;
    return (
      <ChatHistory
        chatHistoryRef={this.chatHistoryRef}
        listRef={this.listRef}
        listHeight={200}
        chatHistory={chatHistory}
      />
    );
  }
}

export default Chat;
