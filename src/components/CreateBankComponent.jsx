import React, { Component } from "react";
import BankService from "../services/BankService";

class CreateBankComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      accountNumber: "",
      trust: "",
      transactionFee: "",
      personName: "",
      age: "",
    };

    this.changeAccountNumberHandler =
      this.changeAccountNumberHandler.bind(this);
    this.changeTrustHandler = this.changeTrustHandler.bind(this);
    this.changeTransactionFeeHandler =
      this.changeTransactionFeeHandler.bind(this);
    this.changePersonNameHandler = this.changePersonNameHandler.bind(this);
    this.changeAgeHandler = this.changeAgeHandler.bind(this);
    this.saveBank = this.saveBank.bind(this);
  }

  saveBank = (e) => {
    e.preventDefault();

    let bank = {
      accountNumber: this.state.accountNumber,
      trust: this.state.trust,
      transactionFee: this.state.transactionFee,
      personName: this.state.personName,
      age: this.state.age,
    };

    console.log("bank => " + JSON.stringify(bank));

    BankService.createBank(bank);
    window.location.reload();
  };

  changeAccountNumberHandler = (event) => {
    this.setState({ accountNumber: event.target.value });
  };

  changeTrustHandler = (event) => {
    this.setState({ trust: event.target.value });
  };

  changeTransactionFeeHandler = (event) => {
    this.setState({ transactionFee: event.target.value });
  };

  changePersonNameHandler = (event) => {
    this.setState({ personName: event.target.value });
  };

  changeAgeHandler = (event) => {
    this.setState({ age: event.target.value });
  };

  render() {
    return (
      <>
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <div className="card-body">
            <h4 className="text-center">Add a new bank account</h4>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>Account number</label>
                <input
                  className="form-control"
                  value={this.state.accountNumber}
                  onChange={this.changeAccountNumberHandler}
                ></input>
              </div>
              <div className="form-group">
                <label>Trust</label>
                <input
                  className="form-control"
                  value={this.state.trust}
                  onChange={this.changeTrustHandler}
                ></input>
              </div>
              <div className="form-group">
                <label>Transaction fee</label>
                <input
                  className="form-control"
                  value={this.state.transactionFee}
                  onChange={this.changeTransactionFeeHandler}
                ></input>
              </div>
              <div className="form-group">
                <label>Client name</label>
                <input
                  className="form-control"
                  value={this.state.personName}
                  onChange={this.changePersonNameHandler}
                ></input>
              </div>
              <div className="form-group">
                <label>Client age</label>
                <input
                  className="form-control"
                  value={this.state.age}
                  onChange={this.changeAgeHandler}
                ></input>
              </div>
              <button onClick={this.saveBank} className="btn btn-primary">
                Add
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default CreateBankComponent;
