import React from "react";
import Page1 from "./page1";

import { TicketType } from "../myTypes";

export default function NewTicket(props: TicketType) {
  const { page } = props;

  const isPage1 = page === 1;
  const isPage2 = page === 2;
  const isPage3 = page === 3;
  const isPage4 = page === 4;

  return (
    <div>
      {isPage1 && <Page1 {...props} />}
      {isPage2 && <Page1 {...props} />}
      {isPage3 && <Page1 {...props} />}
      {isPage4 && <Page1 {...props} />}
    </div>
  );
}
