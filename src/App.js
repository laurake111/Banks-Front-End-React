import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateBankComponent from "./components/CreateBankComponent";
import BankComponent from "./components/BankComponent";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="container">
      <Navbar></Navbar>
      <div className="row">
        <div className="col col-8">
          <BankComponent></BankComponent>
        </div>
        <div className="col col-4">
          <CreateBankComponent></CreateBankComponent>
        </div>
      </div>
    </div>
  );
}

export default App;
