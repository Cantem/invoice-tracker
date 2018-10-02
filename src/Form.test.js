import React from "react";
import renderer from "react-test-renderer";
import Form from "../src/components/Form";

it("matches the snapshot", () => {
  const tree = renderer.create(<Form />);
  expect(tree).toMatchSnapshot();
});
