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
    <div className="App">
      <div>
        {bankAccounts
          ? bankAccounts.map((bankAccount) => {
              return <BankItem key={bankAccount.id} data={bankAccount} />;
            })
          : "loading data..."}
      </div>
    </div>
  );
}

export default App;
