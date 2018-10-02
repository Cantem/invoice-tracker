import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { mockCustomerData } from "./mockData";

const initialState = {
  dueDate: "30/10/2019",
  invoiceValue: "300",
  customer: "Constructor Labs",
  description: "Projector",
  isPaid: null
};

ReactDOM.render(
  <App initialState={initialState} mockCustomerData={mockCustomerData} />,
  document.getElementById("root")
);
