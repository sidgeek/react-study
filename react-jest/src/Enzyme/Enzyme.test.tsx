import React from "react";
import { shallow, mount, render } from "enzyme";
import Parent from "../components/Parent";
import Child from "../components/Child";
import Grandson from "../components/Grandson";

describe("enzyme test", () => {
  // describe("snap", () => {
  //   it("renders <Parent /> components with shallow", () => {
  //     const wrapper = render(<Parent />);
  //     expect(wrapper).toMatchSnapshot();
  //   });
  // });

  describe("different between shallow and mount", () => {
    it("renders <Parent /> components with shallow", () => {
      const wrapper = shallow(<Parent />);
      // console.log(wrapper.debug());
      expect(wrapper.find(Child).length).toBe(3);
    });

    it("renders <Parent /> components with mount", () => {
      const wrapper = mount(<Parent />);
      // console.log(wrapper.debug());
    });
  });

  describe("check ele with selector", () => {
    it("check button with shallow", () => {
      const wrapper = shallow(<Parent />);
      expect(wrapper.find(".myButton").length).toBe(1);
      expect(wrapper.find("button").length).toBe(1);
    });
  });

  describe("different between shallow and mount", () => {
    it("check child component with shallow", () => {
      const wrapper = shallow(<Parent />);
      // console.log(wrapper.find(Child).length);
      // console.log(wrapper.find("Child").length);
      expect(
        wrapper
          .find(Child)
          .first()
          .find(Grandson).length
      ).toBe(0);
    });

    it("check child component with shallow", () => {
      const wrapper = mount(<Parent />);
      // console.log(wrapper.find(Child).length);
      // console.log(wrapper.find("Child").length);

      expect(
        wrapper
          .find(Child)
          .first()
          .find(Grandson).length
      ).toBe(1);
    });
  });

  describe("user operator", () => {
    it("renders <Parent /> components with shallow", () => {
      const wrapper = shallow(<Parent />);
      // expect(wrapper.find(Child).props);
      const oneBtn = wrapper.find("button").at(0);
      oneBtn.simulate("click");
      // expect(oneBtn).toHaveBeenCalled();
    });
  });
});
