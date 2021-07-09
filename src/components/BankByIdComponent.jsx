import React, { useState, useEffect } from "react";
import BankService from "../services/BankService";

function BankByIdComponent(){
    const [bankId, setId] = useState(1);
    const [idFromButtonClick, setIdFromButtonClick] = useState(1);

  const handleClick = () => {
      setIdFromButtonClick(idFromButtonClick);
  };
  
  useEffect(() => {
    const fetchBankById = async () => {
      const result = await BankService.getBankById(idFromButtonClick);
      console.log(result);
      setId(result.data);
    };
    fetchBankById();
    }, [idFromButtonClick]);

    return (
      <div>
        <form class="form-inline">
          <input
            class="form-control mr-sm-2"
            type="text"
            value={bankId}
            onChange={(e) => setId(e.target.value)}
            placeholder="Search"
            aria-label="Search"
          ></input>
          <button
            class="btn btn-outline-primary my-2 my-sm-0"
            type="button"
            onClick={handleClick}
          >
            Fetch bank
          </button>
        </form>
      </div>
    );
}
export default BankByIdComponent;

