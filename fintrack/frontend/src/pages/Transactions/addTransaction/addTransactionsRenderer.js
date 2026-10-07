"use client";
import PageRenderer from "../../../components/pageRenderer/pageRenderer";
import transactionConfig from "./addTransactionsRenderer.json";
import { Box } from "@mui/material";

const TransactionRender = () => {
  return (
    <Box>
      <PageRenderer page={transactionConfig} />
    </Box>
  );
};

export default TransactionRender;
