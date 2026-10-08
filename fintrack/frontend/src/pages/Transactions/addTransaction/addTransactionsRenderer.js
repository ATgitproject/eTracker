"use client";
import PageRenderer from "../../../components/pageRenderer/pageRenderer";
import transactionConfig from "./addTransactionsRenderer.json";
import { Box } from "@mui/material";

const TransactionRender = ({ onSave, useForm }) => {
  return (
    <Box>
      <PageRenderer
        page={transactionConfig}
        onSave={onSave}
        useForm={useForm}
      />
    </Box>
  );
};

export default TransactionRender;
