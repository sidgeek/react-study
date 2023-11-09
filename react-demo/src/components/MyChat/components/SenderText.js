import { createStyles, makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import React from "react";

const useStyles = makeStyles((theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1),
    },
  })
);

export default function SearchBar(props) {
  const classes = useStyles();
  const { onSender } = props;
  let inputElement;

  const sender = () => {
    if (inputElement.value !== "") {
      onSender(inputElement.value);
    }
    clean();
  };

  const search = (e) => {
    e.stopPropagation();
    sender();
  };

  const handleClick = () => {
    sender();
  };

  const clean = () => {
    inputElement.value = "";
  };

  return (
    <React.Fragment>
      <TextField
        className={classes.margin}
        id="input-with-icon-textfield"
        placeholder="Search"
        inputRef={(ref) => (inputElement = ref)}
        onKeyPress={(e) => {
          e.key === "Enter" && search(e);
        }}
      />
      <Button variant="contained" color="primary" onClick={handleClick}>
        Sender
      </Button>
    </React.Fragment>
  );
}
