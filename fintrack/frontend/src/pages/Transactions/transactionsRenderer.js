import React from "react";
import transactionConfig from "./transactionsRenderer.json";
import TableComponent from "../../components/controls/TableComponent/TableComponent";

const TransactionRender = () => {
  return (
    <div className="transaction-render">
      <TableComponent config={transactionConfig} />
    </div>
  );
};

export default TransactionRender;
