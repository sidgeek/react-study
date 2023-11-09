import { ColorResult, CompactPicker } from "react-color";
import React, { useState, useMemo } from "react";
import {
  makeStyles,
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import FormatColorText from "@material-ui/icons/FormatColorTextTwoTone";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles(() => ({
  toolbar: {
    marginLeft: 10
  }
}));

interface IProps {
  fontColor: string;
  onFontColorChanged: (fontColor: string) => void;
}

export default function ButtonWithColorPick(props: IProps) {
  const { fontColor, onFontColorChanged } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const fontStyleTheme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          primary: {
            main: fontColor
          }
        }
      }),
    [fontColor]
  );

  function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function handleColorChange(color: ColorResult) {
    handleClose();
    onFontColorChanged(color.hex);
  }

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <IconButton
        className={classes.toolbar}
        edge="end"
        color="default"
        aria-label="formatcolor"
        onClick={handleClick}
      >
        <MuiThemeProvider theme={fontStyleTheme}>
          <FormatColorText color="primary" />
        </MuiThemeProvider>
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left"
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "right"
        }}
      >
        <CompactPicker color={fontColor} onChange={handleColorChange} />
      </Popover>
    </div>
  );
}
