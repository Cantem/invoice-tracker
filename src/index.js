import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { mockCustomerData } from "./mockData";

const initialState = {
  dueDate: "today",
  invoiceValue: "100000.00",
  customer: "Apple",
  description: "loads of services",
  isPaid: ""
};

ReactDOM.render(
  <App initialState={initialState} mockCustomerData={mockCustomerData} />,
  document.getElementById("root")
);
