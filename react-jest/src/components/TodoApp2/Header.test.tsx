import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";

describe("Header component test", () => {
  it("包含一个 input 框, 初始化应该为空", () => {
    const func = jest.fn();
    const wrapper = shallow(<Header addTodo={func} />);

    const inputElem = wrapper.find("input").at(0);
    expect(inputElem.length).toBe(1);
    expect(inputElem.prop("value")).toEqual("");
  });
});
