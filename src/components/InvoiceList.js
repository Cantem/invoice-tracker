import React, { Component } from "react";

export default class InvoiceList extends Component {
  render() {
    const sorted = Object.values(this.props.invoices).sort(function(a, b) {
      //sorting the object (invoices) by paid status - paid on top of the list
      return (
        (a.isPaid === null) - (b.isPaid === null) ||
        -(a.isPaid > b.isPaid) ||
        +(a.isPaid < b.isPaid)
      );
    });

    return sorted.map(invoice => (
      <div className="container" key={invoice.id}>
        <div>
          <p> Invoice no.</p>
          {invoice.id}
          /2018
        </div>
        <div>
          <p>Customer:</p>
          {invoice.customer}
        </div>
        <div>
          <p>Value:</p>£{invoice.invoiceValue}
        </div>
        <div>
          <p>Payable by:</p>
          {invoice.dueDate}
        </div>
        <div>
          <p>Description:</p>
          {invoice.description}
        </div>
        <div>
          <p>Paid on:</p>
          {invoice.isPaid}
        </div>
        <button onClick={() => this.props.markAsPaid(invoice.id)}>
          Mark as paid
        </button>
      </div>
    ));
  }
}
