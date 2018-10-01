import React, { Component } from "react";

export default class InvoiceList extends Component {
  render() {
    const sorted = Object.values(this.props.invoices).sort(function(a, b) {
      return (
        (a.isPaid === null) - (b.isPaid === null) ||
        -(a.isPaid > b.isPaid) ||
        +(a.isPaid < b.isPaid)
      );
    });

    return sorted.map(invoice => (
      <div key={invoice.id}>
        <div>{invoice.id}</div>
        <div>{invoice.customer}</div>
        <div>{invoice.invoiceValue}</div>
        <div>{invoice.dueDate}</div>
        <div>{invoice.description}</div>
        <div>{invoice.isPaid}</div>
        <button onClick={() => this.props.markAsPaid(invoice.id)}>
          Mark as paid
        </button>
      </div>
    ));
  }
}
