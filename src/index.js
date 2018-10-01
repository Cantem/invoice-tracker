import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { mockCustomerData } from "./mockData";

const initialState = {
  dueDate: "",
  invoiceValue: "",
  customer: "",
  description: "",
  isPaid: ""
};

ReactDOM.render(
  <App initialState={initialState} mockCustomerData={mockCustomerData} />,
  document.getElementById("root")
);
