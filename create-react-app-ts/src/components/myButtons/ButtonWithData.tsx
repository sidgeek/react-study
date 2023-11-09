import withData from "../hoc/withData";
import React from "react";
import Button from "@material-ui/core/Button";

const MyButton = (props: any) => {
  const { data } = props;
  console.log("dg>> MyButton data:", data);
  return <Button>MyButton</Button>;
};

const ButtonWithData = withData(
  MyButton,
  "https://jsonplaceholder.typicode.com/posts"
);

export default ButtonWithData;
