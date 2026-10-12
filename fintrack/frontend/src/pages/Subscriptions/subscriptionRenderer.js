"use client";

import transactionConfig from "./subscriptionRenderer.json";
import PageController from "../../components/pageController/PageController";

const SubscriptionRenderer = () => {
  return <PageController page={transactionConfig} />;
};

export default SubscriptionRenderer;
