import React from "react";
import { useState } from "react";

const BankItem = (props) => {
  const [bankItem] = useState(props.data);
  return (
      <tbody>
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
  );
};

export default BankItem;
