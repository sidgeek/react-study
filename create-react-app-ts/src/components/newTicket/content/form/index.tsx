import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
import { TicketType } from "../../myTypes";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}));

export default function PaperSheet(props: TicketType) {
  const {
    description,
    content,
    connectionType,
    testSpeedObj,
    setDescription,
    setContent
  } = props;
  const classes = useStyles();

  return (
    <div>
      <form>
        <input
          type="description"
          name="description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <input
          type="content"
          name="content"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
        <div>{connectionType}</div>;
        <div>
          <div>{testSpeedObj.pingSpeed}</div>
          <div>{testSpeedObj.downSpeed}</div>
          <div>{testSpeedObj.upSpeed}</div>
        </div>
      </form>
    </div>
  );
}
