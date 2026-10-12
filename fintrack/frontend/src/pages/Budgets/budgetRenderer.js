"use client";

import transactionConfig from "./budgetRenderer.json";
import PageController from "../../components/pageController/PageController";

const BudgetRenderer = () => {
  return <PageController page={transactionConfig} />;
};

export default BudgetRenderer;
