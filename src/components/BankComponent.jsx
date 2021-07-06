import React from "react";
import BankService from "../services/BankService";

class BankComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      banks: [],
    };

    this.deleteBank = this.deleteBank.bind(this);
  }

  deleteBank(id) {
      BankService.deleteBank(id).then( res => {
          this.setState({banks: this.state.banks.filter(bank => bank.id !== id)})
      });
  }

  componentDidMount() {
    BankService.getBanks().then((response) => {
      this.setState({ banks: response.data });
    });
  }

  render() {
    return (
      <table class="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Account number</th>
            <th>Trust</th>
            <th>Transaction fee</th>
            <th>Client name</th>
            <th>Client Age</th>
            <th>LS score</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.state.banks.map((bank) => (
            <tr key={bank.id}>
              <td>{bank.id}</td>
              <td>{bank.accountNumber}</td>
              <td>{bank.trust}</td>
              <td>{bank.transactionFee}</td>
              <td>{bank.personName}</td>
              <td>{bank.age}</td>
              <td>{bank.levenshteinScore}</td>
              <td>
                <button
                  onClick={() => this.deleteBank(bank.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default BankComponent;
