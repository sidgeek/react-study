import React, { Component, createRef } from "react";
import ChatHistory from "./ChatHistory";
import randomSentence from "random-sentence";
import "./styles.css";

class Chat extends Component {
  constructor(props) {
    super(props);
    this.listRef = createRef();
    this.chatHistoryRef = createRef();
    this.state = {
      listHeight: 0,
      chatHistory: [],
    };
  }

  componentDidMount() {
    const listHeight = this.chatHistoryRef.current.offsetHeight;
    this.setState({ listHeight });

    this.startChatMessages();
  }

  startChatMessages = () => {
    setInterval(() => {
      const { chatHistory } = this.state;
      const text = randomSentence(500, 1000);
      chatHistory.push({ text });
      if (chatHistory.length < 30) {
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
    const { chatHistory, listHeight } = this.state;
    return (
      <ChatHistory
        chatHistoryRef={this.chatHistoryRef}
        listRef={this.listRef}
        listHeight={listHeight}
        chatHistory={chatHistory}
      />
    );
  }
}

export default Chat;
