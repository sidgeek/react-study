import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import MyFrom from "./form";
import { TicketType } from "../myTypes";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}));

export default function PaperSheet(props: TicketType) {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <MyFrom {...props} />
      </Paper>
    </div>
  );
}
