import React from "react";
import { SvgIconProps } from "@material-ui/core/SvgIcon";

interface WithIconChoose {
  iconChoose: boolean;
}

const withIcon = <P extends object>(
  Component: React.ComponentType<P>,
  SvgIcon1: React.ComponentType<SvgIconProps>,
  SvgIcon2: React.ComponentType<SvgIconProps>
): React.FC<P & WithIconChoose> => ({ iconChoose, ...props }) => {
  return (
    <Component {...props as P}>
      {iconChoose ? <SvgIcon1 /> : <SvgIcon2 />}
    </Component>
  );
};
export default withIcon;
