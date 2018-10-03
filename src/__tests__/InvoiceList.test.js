import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import InvoiceList from "../components/InvoiceList";
import { shallow } from "enzyme";
import { mockCustomerData } from "../mockData";

configure({ adapter: new Adapter() });

describe("InvoiceList component", () => {
  it("marks an invoice as paid with the current date", () => {
    const mockMarkAsPaid = jest.mock();

    const wrapper = shallow(
      <InvoiceList invoices={mockCustomerData} markAsPaid={mockMarkAsPaid} />
    );
  });
});
