import InputAdornment from "@material-ui/core/InputAdornment";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import CloseIcon from "@material-ui/icons/Close";
import SearchIcon from "@material-ui/icons/Search";
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
  const { onSearch } = props;
  let inputElement;

  const search = (e) => {
    e.stopPropagation();
    if (inputElement.value !== "") {
      onSearch(inputElement.value);
    }
    clean();
  };

  const clean = () => {
    inputElement.value = "";
  };

  return (
    <TextField
      className={classes.margin}
      id="input-with-icon-textfield"
      placeholder="Search"
      inputRef={(ref) => (inputElement = ref)}
      onKeyPress={(e) => {
        e.key === "Enter" && search(e);
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start" onClick={search}>
            <SearchIcon />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end" onClick={clean}>
            <CloseIcon />
          </InputAdornment>
        ),
      }}
    />
  );
}
