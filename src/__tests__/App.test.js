import { configure } from "enzyme";
import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "../App";
import { shallow } from "enzyme";
import { mockCustomerData } from "../mockData";

configure({ adapter: new Adapter() });

describe("App component", () => {
  it("checks if it renders correctly", () => {
    const mockInitialState = {};
    const wrapper = shallow(
      <App
        initialState={mockInitialState}
        mockCustomerData={mockCustomerData}
      />
    );
    const text = wrapper.find("h1").text();
    expect(text).toEqual("InvoiceTRACKER");
  });
});
