import { useLayoutEffect, useState } from "react";
export const useWindowSize = () => {
  let [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      console.log("updateSize", window.innerWidth, window.innerHeight);
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
};
