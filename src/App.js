import { useEffect, useState } from "react";
import "./App.css";
import BankItem from "./components/BankItem";

function App() {
  const [bankAccounts, setBankAccounts] = useState(null);

  useEffect(() => {
    // do something on load
    console.log("Hello there! general kenobi!");

    if (!bankAccounts) {
      fetch("http://localhost:8080/api/banks/").then((response) =>
        response.json().then((data) => {
          console.log(`bank accounts: `, data);
          setBankAccounts(data);
        })
      );
    }
  }, [bankAccounts]);

  return (
    <div class="container">
      <div>
        {bankAccounts
          ? bankAccounts.map((bankAccount) => {
              return (
                <div>
                  <table class="table">
                    <thead>
                      <tr>
                        <th>id</th>
                        <th>accountNumber</th>
                        <th>trust</th>
                        <th>transactionFee</th>
                        <th>person name</th>
                        <th>age</th>
                        <th>levenshtein score</th>
                        <th>levenshtein score w/ Laura</th>
                      </tr>
                    </thead>
                    <BankItem key={bankAccount.id} data={bankAccount} />
                  </table>
                  
                </div>
              );
            })
          : "loading data..."}
      </div>
    </div>
  );
}

export default App;
