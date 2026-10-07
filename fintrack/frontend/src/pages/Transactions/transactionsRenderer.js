"use client";

import transactionConfig from "./transactionsRenderer.json";
import PageController from "../../components/pageController/PageController";

const TransactionRenderer = () => {
  return <PageController page={transactionConfig} />;
};

export default TransactionRenderer;
