import React, { useState } from "react";

const BlinkyRender = () => {
  const [value, setValue] = useState(5);

  React.useEffect(() => {
    if (value < 0) {
      setValue(5);
    }
  }, [value]);

  console.log("render", value);

  return <div onClick={() => setValue(value-1)}>value: {value}</div>;
};

export default BlinkyRender;
