import React, { useState, useEffect } from "react";
import BankService from "../services/BankService";

function BankComponent() {
  const [banks, setBanks] = useState([]);
  //const [bankId, setId] = useState([1]);
  useEffect(() => {
    const fetchBanks = async () => {
      const result = await BankService.getBanks();
      setBanks(result.data);
    };

    fetchBanks();

    // empty dependency array [] means this effect will only run once (like componentDidMount in classes)
  }, []);

  const handleDelete = (bankId) => {
    const tempBanks = banks.filter((bank) => bank.id !== bankId);
    BankService.deleteBank(bankId);
    setBanks(tempBanks)
  };

  return (
    <div className="card">
      <div className="card-body">
        <h4 className="text-center">Bank accounts</h4>
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
            {banks.map((bank) => (
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
                    onClick={() => handleDelete(bank.id)}
                    className="btn btn-outline-danger my-2 my-sm-0"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BankComponent;
