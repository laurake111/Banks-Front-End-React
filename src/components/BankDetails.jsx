import { useParams } from "react-router-dom";
import BankService from "../services/BankService";
import React, { useState, useEffect } from "react";

const BlogDetails = () => {
    const { id } = useParams();
    const [ bankId, setId] = useState([]);

    useEffect(() => {
        const fetchBankById = async () => {
          const result = await BankService.getBankById(id).then();
          console.log(result);
          setId(result.data);
        };
        fetchBankById();
        }, [id]);

    return ( 
        <div className="bank-details">
            <h2>Bank details - { id }</h2>
                <h3>{bankId.id}</h3>
                <h3>{bankId.accountNumber}</h3>
                <h3>{bankId.trust}</h3>
                <h3>{bankId.transactionFee}</h3>
                <h3>{bankId.personName}</h3>
                <h3>{bankId.age}</h3>
                <h3>{bankId.levenshteinScore}</h3>
        </div>
    );
}
 
export default BlogDetails;