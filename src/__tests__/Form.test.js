import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import React from "react";
import Form from "../components/Form";
import { shallow } from "enzyme";

configure({ adapter: new Adapter() });

describe("Form component", () => {
  it("renders without crashing", () => {
    shallow(<Form />);
  });

  it("checks if renders customer field", () => {
    const wrapper = shallow(<Form />);
    const text = wrapper.find("p.customer").text();
    expect(text).toEqual("Customer");
  });
});
