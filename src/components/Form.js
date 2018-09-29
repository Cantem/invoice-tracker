import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.initialState
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
    }));
  }

  render() {
    return (
      <form
        onChange={event => this.handleChange(event)}
        onSubmit={event => this.props.saveToStorage(event, this.state)}
      >
        <div>
          <label>Due Date</label>
          <input name="dueDate" type="text" defaultValue={this.state.dueDate} />
        </div>
        <div>
          <label> Invoice Value </label>
          <input
            name="invoiceValue"
            type="text"
            defaultValue={this.state.invoiceValue}
          />
        </div>
        <div>
          <label> Customer </label>
          <input
            name="customer"
            type="text"
            defaultValue={this.state.customer}
          />
        </div>
        <div>
          <label> Description </label>
          <input
            name="description"
            type="text"
            defaultValue={this.state.description}
          />
        </div>
        <button> Add invoice </button>
      </form>
    );
  }
}
