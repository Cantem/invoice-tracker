import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import React from "react";
import InvoiceList from "../components/InvoiceList";
import { shallow } from "enzyme";

configure({ adapter: new Adapter() });

describe("InvoiceList component", () => {
  it("marks an invoice as paid with the current date", () => {
    const wrapper = shallow(<InvoiceList />);
    const markAsPaidButton = wrapper.find("button");
    markAsPaidButton.simulate("click");
    const text = wrapper.find("p").text();
    expect(text).toEqual("3/10/2018");
  });
});
