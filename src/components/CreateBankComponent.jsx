import React, { useState } from "react";
import BankService from "../services/BankService";

const CreateBankComponent = () => {
  const [accountNumber, setAccountNumber] = useState("");
  const [trust, setTrust] = useState("");
  const [transactionFee, setTransactionFee] = useState("");
  const [personName, setPerson] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const bank = { accountNumber, trust, transactionFee, personName, age };

    console.log("bank => " + JSON.stringify(bank));

    BankService.createBank(bank);
    window.location.reload();
  };

  return (
    <>
      <div className="card">
        <div className="card-body">
          <h4 className="text-center">Add a new bank account</h4>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Account number</label>
              <input
                className="form-control"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
              ></input>
            </div>
            <div className="form-group">
              <label>Trust</label>
              <input
                className="form-control"
                value={trust}
                onChange={(e) => setTrust(e.target.value)}
              ></input>
            </div>
            <div className="form-group">
              <label>Transaction fee</label>
              <input
                className="form-control"
                value={transactionFee}
                onChange={(e) => setTransactionFee(e.target.value)}
              ></input>
            </div>
            <div className="form-group">
              <label>Client name</label>
              <input
                className="form-control"
                value={personName}
                onChange={(e) => setPerson(e.target.value)}
              ></input>
            </div>
            <div className="form-group">
              <label>Client age</label>
              <input
                className="form-control"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              ></input>
            </div>
            <button class="btn btn-outline-primary my-2 my-sm-0">Add</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateBankComponent;
