import isloadingHoc from "../hoc/withLoading";
import React from "react";
import Button from "@material-ui/core/Button";

const MyButton = ({ ...props }) => {
  return <Button onClick={props.onClick}>MyButton2</Button>;
};

const ButtonWithLoading = isloadingHoc(MyButton);

export default ButtonWithLoading;
