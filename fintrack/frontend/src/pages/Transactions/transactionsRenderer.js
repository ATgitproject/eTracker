"use client";
import transactionConfig from "./transactionsRenderer.json";
import PageRenderer from "../../components/pageRenderer/pageRenderer";
import { Box } from "@mui/material";

const TransactionRender = () => {
  return (
    <Box>
      <PageRenderer page={transactionConfig} />
    </Box>
  );
};

export default TransactionRender;
