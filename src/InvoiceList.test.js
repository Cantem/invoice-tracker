import React from "react";
import renderer from "react-test-renderer";
import InvoiceList from "../src/components/InvoiceList";

it("matches the snapshot", () => {
  const tree = renderer.create(<InvoiceList />);
  expect(tree).toMatchSnapshot();
});
