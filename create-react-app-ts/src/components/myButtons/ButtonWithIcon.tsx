import React from "react";
import withIcon from "../hoc/withIcon";
import FollowedIcon from "@material-ui/icons/GradeOutlined";
import Delete from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

{
  /* <IconButton
  edge="end"
  color="default"
  aria-label="announcement"
  // onClick={onHandleSwitchImportantColor}
>
  { ? <Announcement /> : <Message />}
</IconButton>; */
}

const MyButton = ({ ...props }) => {
  return <IconButton onClick={props.onClick} {...props} />;
};

const ButtonWithIcon = withIcon(MyButton, FollowedIcon, Delete);

export default ButtonWithIcon;
