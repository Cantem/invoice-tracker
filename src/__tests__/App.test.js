import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import React from "react";
import App from "../App";
import Form from "../components/Form";
import { shallow } from "enzyme";

configure({ adapter: new Adapter() });

describe("App component", () => {
  it("Customer pre-filled with Constructor Labs", () => {
    const wrapper = shallow(<App />);
    const text = wrapper.find("p").text();
    expect(text).toEqual("Constructor Labs");
  });
});
