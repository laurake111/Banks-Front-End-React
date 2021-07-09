import React, { PureComponent } from "react";
import BankComponent from "./components/BankListComponent";

export default class HomeComponent extends PureComponent {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col col-8">
              <BankComponent />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
