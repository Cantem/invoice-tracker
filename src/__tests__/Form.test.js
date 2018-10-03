import * as enzyme from "enzyme";
import * as React from "react";
import Form from "../components/Form";
import { shallow } from "enzyme";

describe("Form component", () => {
  it("starts with a prop invoiceValue 300", () => {
    const wrapper = shallow(<Form />);
    const invoiceValueState = wrapper.state().invoiceValue;
    expect(invoiceValueState).toEqual("300");
  });
});
