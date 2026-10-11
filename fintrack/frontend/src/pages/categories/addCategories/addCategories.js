"use client";
import PageRenderer from "../../../components/pageRenderer/pageRenderer";
import categoriesConfig from "./addCategories.json";
import { Box } from "@mui/material";

const AddCategories = ({ onSave, useForm }) => {
  return (
    <Box>
      <PageRenderer page={categoriesConfig} onSave={onSave} useForm={useForm} />
    </Box>
  );
};

export default AddCategories;
