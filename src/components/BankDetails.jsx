import { useParams } from "react-router-dom";
import BankService from "../services/BankService";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const [bankId, setId] = useState([]);

  useEffect(() => {
    const fetchBankById = async () => {
      const result = await BankService.getBankById(id).then();
      console.log(result);
      setId(result.data);
    };
    fetchBankById();
  }, [id]);

  return (
    <div className="bank-details container">
      <div className="card">
        <div className="card-body">
          <h2 className="card/title">Bank id: {id}</h2>
          <div className="row">
            <div className="col">
              <p>Account number</p>
              <p>Trust</p>
              <p>Transaction fee</p>
              <p>Client name</p>
              <p>Client Age</p>
              <p>LS score</p>
            </div>
            <div className="col">
              <p>{bankId.accountNumber}</p>
              <p>{bankId.trust}</p>
              <p>{bankId.transactionFee}</p>
              <p>{bankId.personName}</p>
              <p>{bankId.age}</p>
              <p>{bankId.levenshteinScore}</p>
            </div>
          </div>
          <Link to={"/"}>
            <button className="btn btn-outline-primary my-2 my-sm-0">
              Back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
