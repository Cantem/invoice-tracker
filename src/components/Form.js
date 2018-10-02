import React, { Component } from "react";
import invoice from "./invoice.svg";
export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.initialState
    };

    this.invoiceValue = React.createRef();
    this.dueDate = React.createRef();
    this.customer = React.createRef();
    this.description = React.createRef();

    this.handelChange = this.handelChange.bind(this);
  }
  handelChange(event) {
    this.setState(preveState => ({
      ...preveState,
      invoiceValue: this.invoiceValue.current.value,
      dueDate: this.dueDate.current.value,
      customer: this.customer.current.value,
      description: this.description.current.value
    }));
  }
  render() {
    return (
      <div className="invoice-container">
        <div className="wrapper">
          <div className="invoice">
            <h3>Invoice Form</h3>
            <img src={invoice} className="invoice-image" alt="invoice" />
          </div>
          <div className="invoice-structure">
            <form
              onChange={event => this.handelChange(event)}
              onSubmit={event => this.props.saveToStorage(event, this.state)}
            >
              <p>
                <label>Due date</label>
                <input
                  className="form-field"
                  ref={this.dueDate}
                  name="dueDate"
                  type="text"
                  defaultValue={this.state.dueDate}
                />
              </p>
              <p>
                <label>Invoice value</label>
                <input
                  className="form-field"
                  ref={this.invoiceValue}
                  name="invoiceValue"
                  type="text"
                  defaultValue={this.state.invoiceValue}
                />
              </p>
              <p>
                <label>Customer</label>
                <input
                  className="form-field"
                  ref={this.customer}
                  name="customer"
                  type="text"
                  defaultValue={this.state.customer}
                />
              </p>
              <p>
                <label>Description</label>
                <input
                  className="form-field"
                  rows="5"
                  ref={this.description}
                  name="description"
                  type="text"
                  defaultValue={this.state.description}
                />
              </p>
              <p className="full">
                <button className="button" type="submit">
                  Add invoice
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
