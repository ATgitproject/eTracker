"use client";
import PageRenderer from "../../../components/pageRenderer/pageRenderer";
import transactionConfig from "./addSubscriptionRenderer.json";
import { Box } from "@mui/material";

const AddSubscriptionRenderer = ({ onSave, useForm }) => {
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

export default AddSubscriptionRenderer;
