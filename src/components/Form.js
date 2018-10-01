import React, { Component } from "react";

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
      <form
        className="form"
        onChange={event => this.handelChange(event)}
        onSubmit={event => this.props.saveToStorage(event, this.state)}
      >
        <div>
          <label>Due date</label>
          <input
            className="form-field"
            ref={this.dueDate}
            name="dueDate"
            type="text"
            defaultValue={this.state.dueDate}
          />
        </div>
        <div>
          <label>Invoice value</label>
          <input
            className="form-field"
            ref={this.invoiceValue}
            name="invoiceValue"
            type="text"
            defaultValue={this.state.invoiceValue}
          />
        </div>
        <div>
          <label>Customer</label>
          <input
            className="form-field"
            ref={this.customer}
            name="customer"
            type="text"
            defaultValue={this.state.customer}
          />
          <div>
            <label>Description</label>
            <input
              className="form-field"
              ref={this.description}
              name="description"
              type="text"
              defaultValue={this.state.description}
            />
          </div>
        </div>
        <button className="button" type="submit">
          Add invoice
        </button>
      </form>
    );
  }
}
