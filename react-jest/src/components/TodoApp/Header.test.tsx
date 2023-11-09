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

  it("input 框, 当用户输入时，会跟随变化", () => {
    const func = jest.fn();
    const wrapper = shallow(<Header addTodo={func} />);
    const inputElem = wrapper.find("input").at(0);

    const userInput = "study Jest";
    inputElem.simulate("change", {
      target: { value: userInput }
    });
    expect(wrapper.state("value")).toEqual(userInput);
  });

  it("input 框输入回车时，如果 input 无内容，无操作", () => {
    const func = jest.fn();
    const wrapper = shallow(<Header addTodo={func} />);
    const inputElem = wrapper.find("input").at(0);
    wrapper.setState({ value: "" });
    inputElem.simulate("keyUp", {
      keyCode: 13
    });
    expect(func).not.toHaveBeenCalled();
  });

  it("input 框输入回车时，如果 input 有内容，函数应该被调用", () => {
    const func = jest.fn();
    const wrapper = shallow(<Header addTodo={func} />);
    const inputElem = wrapper.find("input").at(0);
    wrapper.setState({ value: "study Jest" });
    inputElem.simulate("keyUp", {
      keyCode: 13
    });
    expect(func).toHaveBeenCalled();
    expect(func).toHaveBeenLastCalledWith("study Jest");
  });

  it("input 框输入回车时，如果 input 有内容，最后应该清除掉", () => {
    const func = jest.fn();
    const wrapper = shallow(<Header addTodo={func} />);
    const inputElem = wrapper.find("input").at(0);
    wrapper.setState({ value: "study Jest" });
    inputElem.simulate("keyUp", {
      keyCode: 13
    });
    const newInputElem = wrapper.find("input").at(0);
    expect(newInputElem.prop("value")).toBe("");
  });
});
