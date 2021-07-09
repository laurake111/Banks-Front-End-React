import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeComponent from "./HomeComponent";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateBankComponent from "./components/CreateBankComponent";
import BankDetails from "./components/BankDetails";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
          <Switch>
              <Route exact path="/">
                <HomeComponent/>
              </Route>
              <Route path="/create">
                <CreateBankComponent/>
              </Route>
              <Route path="/banks/:id">
                <BankDetails/>
              </Route>
          </Switch>
      </div>
      
    </Router>
  );
}

export default App;
