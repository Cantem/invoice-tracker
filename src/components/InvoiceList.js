import React, { Component } from "react";

export default class InvoiceList extends Component {
  render() {
    return (
      <div>
        {Object.entries(this.props.invoices).map(([id, invoice]) => (
          <div key={id}>
            <div>{invoice.id}</div>
            <div>{invoice.customer}</div>
            <div>{invoice.invoiceValue}</div>
            <div>{invoice.dueDate}</div>
            <div>{invoice.description}</div>
            <div>{invoice.isPaid}</div>
            <button onClick={() => this.markAsPaid(id)}>Mark as paid</button>
          </div>
        ))}
      </div>
    );
  }
}
