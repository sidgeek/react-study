import React from "react";
import { mount, shallow } from "enzyme";
import TodoList from "./TodoList";
import Header from "./Header";

describe("TodoList component unit test", () => {
  it("TodoList 初始化列表为空", () => {
    const wrapper = shallow(<TodoList />);
    expect(wrapper.state("todoList")).toEqual([]);
  });

  it("应该给 Header 传递一个 addTodo 的方法", () => {
    const wrapper = shallow<TodoList>(<TodoList />);
    const HeaderWrapper = wrapper.find(Header);
    //   console.log("dg>> Header", HeaderWrapper.prop("addTodo"));
    //   console.log("dg>> Header", (wrapper.instance() as any).addTodo);
    expect(HeaderWrapper.prop("addTodo")).toBe(wrapper.instance().addTodo);
  });

  it("当 Header 回车时, todoList 应该新增内容", () => {
    const wrapper = shallow<TodoList>(<TodoList />);
    const { addTodo } = wrapper.instance();

    addTodo("study jest 1");
    expect(wrapper.state("todoList").length).toBe(1);
    expect(wrapper.state("todoList")[0]).toBe("study jest 1");

    addTodo("study jest 2");
    expect(wrapper.state("todoList").length).toBe(2);
  });
});

describe("TodoList component integrated test", () => {
  it(`
  1. Header input something
  2. 回车
  3. todoList will show new add content
`, () => {
    const wrapper = mount(<TodoList />);
    const inputElem = wrapper.find("input").at(0);
    const content = "Study jest";
    inputElem.simulate("change", {
      target: { value: content }
    });
    inputElem.simulate("keyUp", {
      keyCode: 13
    });
    const listItem = wrapper.find(TodoList);
    expect(listItem.length).toEqual(1);
    expect(listItem.text()).toContain(content);
  });
});
