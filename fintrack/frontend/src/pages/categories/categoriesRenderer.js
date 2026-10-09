"use client";

import categoriesConfig from "./categoriesRenderer.json";
import PageController from "../../components/pageController/PageController";

const CategoriesRenderer = () => {
  return <PageController page={categoriesConfig} />;
};

export default CategoriesRenderer;
