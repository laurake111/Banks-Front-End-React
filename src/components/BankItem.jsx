import React from "react";
import { useState } from "react";

const BankItem = (props) => {
  const [bankItem] = useState(props.data);
  return (
    <table>
      <tbody>
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
        <tr>
          <td>{bankItem.id}</td>
          <td>{bankItem.accountNumber}</td>
          <td>{bankItem.trust}</td>
          <td>{bankItem.transactionFee}</td>
          <td>{bankItem.personName}</td>
          <td>{bankItem.age}</td>
          <td>{bankItem.levenshteinScore}</td>
          <td>{bankItem.levenshteinScoreWithLaura}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default BankItem;
