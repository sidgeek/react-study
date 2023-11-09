import React from "react";
// import {useDisplayMoutedOrUnMouted} from '../debug/displayMoutedOrUnMounted'
import ButtonWithLogger from "../components/myButtons/ButtonWithLogger";
import ButtonWithLoading from "../components/myButtons/ButtonWithLoading";
import ButtonWithData from "../components/myButtons/ButtonWithData";
import ButtonWithIcon from "../components/myButtons/ButtonWithIcon";
import ButtonWithColorPick from "../components/myButtons/ButtonWithColorPick";

export default function Home() {
  const onButton1Click = () => {
    console.log("dg>> onButton1Click");
  };

  const onButton2Click = () => {
    console.log("dg>> onButton2Click");
  };

  const onButton3Click = (color: string) => {
    console.log("dg>> onButton2Click", color);
  };

  return (
    <div>
      <h2>Home</h2>
      {/* <MyButton /> */}
      {/* <MyButton isloading={true} /> */}
      {/* <ButtonWithLogger /> */}
      <ButtonWithLoading loading={false} onClick={onButton1Click} />
      <ButtonWithIcon iconChoose={false} onClick={onButton2Click} />
      <ButtonWithColorPick
        fontColor={"#0073a0"}
        onFontColorChanged={onButton3Click}
      />
      {/* <ButtonWithData /> */}
    </div>
  );
}
