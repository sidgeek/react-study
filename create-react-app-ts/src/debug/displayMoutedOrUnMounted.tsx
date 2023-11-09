import { useEffect } from "react";

export const useDisplayMoutedOrUnMouted = (name: string) => {
  useEffect(() => {
    console.log(`${name} mounted`);
    return () => {
      console.log(`${name} unMounted`);
    };
  }, []);
};
