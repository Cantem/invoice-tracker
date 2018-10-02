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
          invoices: JSON.parse(localStorage.getItem("invoices"))
        })
      : localStorage.setItem(
          "invoices",
          JSON.stringify(this.props.mockCustomerData)
        ),
      this.setState({
        invoices: JSON.parse(localStorage.getItem("invoices"))
      });
  }

  saveToStorage(event, invoiceToAdd) {
    event.preventDefault();

    this.setState(prevState => {
      const newId = Object.keys(prevState.invoices).length + 1;
      return {
        invoices: {
          ...prevState.invoices,
          [newId]: { ...invoiceToAdd, id: newId }
        }
      };
    }, localStorage.setItem("invoices", JSON.stringify(this.state.invoices)));
  }

  markAsPaid(id) {
    const result = Object.assign({}, this.state.invoices[id]);
    result.isPaid = new Date().toString();

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
