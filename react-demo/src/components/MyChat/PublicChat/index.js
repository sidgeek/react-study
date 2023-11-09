import React, { useCallback, useEffect, useState } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import PullButton from "../components/PullButton";
import SenderText from "../components/SenderText";
import socket from "../../../socket";
import useReference from "../hooks/useReference";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
    },
    content: {
      height: 600,
      width: "100%",
    },
    action: {
      width: "100%",
      marginRight: 5,
    },
  })
);

export default function Index() {
  console.log("dg>> render Index");
  const classes = useStyles();

  const [msgs, setMsgs] = useState([]);
  const msgsRef = useReference(msgs);
  const handleSender = useCallback((text) => {
    socket.emit("chat message", text);
  }, []);

  const handlePull = useCallback((text) => {
    socket.emit("pull message", "text");
  }, []);

  useEffect(() => {
    socket.auth = { username: `fake_${Math.random()}` };
    socket.connect();

    socket.on("connect", () => {
      console.log("dg>> connect");
    });

    socket.on("disconnect", () => {
      console.log("dg>> disconnect");
    });

    socket.on("chat message", function (msg) {
      console.log("receive:", msgsRef.current, msg);
      setMsgs([...msgsRef.current, msg]);
    });

    socket.on("pull message", ({ content, from }) => {
      let res;
      try {
        res = JSON.parse(content);
      } catch (error) {}
      console.log("receive pull msg:", res);
      setMsgs([...msgsRef.current, ...res]);
    });

    return () => {};
  }, [msgsRef]);

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        {msgs.map((e) => (
          <div key={e}> {e}</div>
        ))}
      </div>

      <div className={classes.action}>
        <SenderText onSender={handleSender} />
      </div>

      <div className={classes.action}>
        <PullButton onClick={handlePull} />
      </div>
    </div>
  );
}
