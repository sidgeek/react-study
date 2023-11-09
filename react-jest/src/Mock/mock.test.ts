import React from "react";
import { runCallBack, getData } from "./../lib";
import axios from "axios";
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe.skip("mock test", () => {
  describe("mock 回调函数", () => {
    it("mock 回调函数1", () => {
      const func = jest.fn();
      runCallBack(func);
      runCallBack(func);
      expect(func).toBeCalled();
      expect(func.mock.calls.length).toBe(2);
      expect(func.mock.calls[0]).toEqual(["mock"]);
      // console.log(func.mock);
    });

    it("mock 回调函数2", () => {
      const func = jest.fn(() => "hello, ni hao!");
      runCallBack(func);
      // console.log(func.mock);
    });

    it("mock 回调函数3", () => {
      const func = jest.fn();
      func.mockReturnValueOnce("Hi");
      func.mockReturnValueOnce("ni hao");
      runCallBack(func);
      runCallBack(func);
      console.log(func.mock);
    });
  });

  it("mock 异步请求", async () => {
    mockedAxios.get.mockResolvedValue({ data: "hello" });
    const result = await getData().then(res => {
      // console.log(res);
      return res;
    });

    expect(mockedAxios.get).toHaveBeenCalled();
    expect(result).toEqual({ data: "hello" });
  });
});
