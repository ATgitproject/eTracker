"use client";
import PageRenderer from "../../../components/pageRenderer/pageRenderer";
import transactionConfig from "./addBudgetRenderer.json";
import { Box } from "@mui/material";

const BudgetAdd = ({ onSave, useForm }) => {
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

export default BudgetAdd;
