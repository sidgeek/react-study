// import { createStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import React from "react";

// const useStyles = makeStyles((theme) =>
//   createStyles({
//     margin: {
//       margin: theme.spacing(1),
//     },
//   })
// );

export default function SearchBar(props) {
  // const classes = useStyles();
  const { onClick } = props;

  return (
    <Button variant="contained" color="primary" onClick={onClick}>
      Pull
    </Button>
  );
}
