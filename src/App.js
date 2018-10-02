import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";
import InvoiceList from "./components/InvoiceList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      invoices: {}
    };

    this.saveToStorage = this.saveToStorage.bind(this);
    this.markAsPaid = this.markAsPaid.bind(this);
  }

  componentDidMount() {
    localStorage.getItem("invoices")
      ? this.setState({
          invoices: JSON.parse(localStorage.getItem("invoices")) //componentDidMount checks if data from invoices (state) needs to be loaded
        })
      : localStorage.setItem(
          "invoices",
          JSON.stringify(this.props.mockCustomerData) //local storage only supports strings as values
        ),
      this.setState({
        invoices: JSON.parse(localStorage.getItem("invoices")) //using parse() to convert data back to object
      });
  }

  saveToStorage(event, invoiceToAdd) {
    event.preventDefault();

    this.setState(prevState => {
      const newId = Object.keys(prevState.invoices).length + 1; //using the length of the object to generate new Id
      return {
        invoices: {
          ...prevState.invoices,
          [newId]: { ...invoiceToAdd, id: newId }
        }
      };
    }, localStorage.setItem("invoices", JSON.stringify(this.state.invoices))); //on submit adding new object(invoice) to the local storage
  }

  markAsPaid(id) {
    const result = Object.assign({}, this.state.invoices[id]); //assigning isPaid key  to current date to mark it as paid (needed for sorting)
    result.isPaid = new Date().toLocaleDateString("en-GB");

    this.setState(prevState => {
      return {
        invoices: {
          ...prevState.invoices,
          [id]: { ...result }
        }
      };
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
            Invoice
            <span>TRACKER</span>
          </h1>
        </header>
        <Form
          initialState={this.props.initialState}
          saveToStorage={this.saveToStorage}
        />
        <InvoiceList
          invoices={this.state.invoices}
          markAsPaid={this.markAsPaid}
        />
      </div>
    );
  }
}

export default App;
