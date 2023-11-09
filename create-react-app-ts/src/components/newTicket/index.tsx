import React, { useState } from "react";
import Content from "./content";

import { TicketType } from "./myTypes";

export default function NewTicket() {
  const [page, setPage] = useState(1);
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [testSpeedObj, setTestSpeedObj] = useState({});
  const [connectionType, setConnectionType] = useState(0);

  // const [TestSpeedObj {

  // }, setPage] = useState(1);
  // const setDescription = () => {}

  const ticketObj: TicketType = {
    description,
    content,
    connectionType,
    testSpeedObj: {
      pingSpeed: "0",
      downSpeed: "1",
      upSpeed: "2"
    },
    setDescription,
    setContent,
    setPage,
    page
  };

  return (
    <div>
      <div className="ticket-head">
        <h2>NewTicket</h2>
      </div>

      <div className="ticket-content">
        <Content {...ticketObj} />
      </div>
    </div>
  );
}
