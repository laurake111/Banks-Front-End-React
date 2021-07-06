import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateBankComponent from "./components/CreateBankComponent";
import BankComponent from "./components/BankComponent";

function App() {
  return (
    <div className="container">
      <div className="row">
        <h1>Bank accounts table</h1>
      </div>
      <div className="row">
        <div className="col">
          <BankComponent></BankComponent>
        </div>
        <div className="col">
          <CreateBankComponent></CreateBankComponent>
        </div>
      </div>
    </div>
  );
}

export default App;
