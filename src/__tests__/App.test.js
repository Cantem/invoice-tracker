import React from "react";
import App from "../App";
import { shallow } from "enzyme";

describe("Form component", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });
});
