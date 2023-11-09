// import React from "react";
import Button from "@material-ui/core/Button";
import WithLogger from "../hoc/withLogger";

const MyButtom = () => <Button>mybutton</Button>;
const ButtonWithLogger = WithLogger("这里打印的是xxx")(MyButtom);

export default ButtonWithLogger;
