import axios from "axios";

export const runCallBack = (fn: (args: any) => void) => {
  fn("mock");
};

export const getData = () => {
  return axios.get("./");
};
