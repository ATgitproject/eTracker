"use client";

import PageRenderer from "../../components/pageRenderer/pageRenderer";
import dashboardConfig from "./dashboardRender.json";

import "./dashboardRender.scss";

const DashboardRenderer = () => {
  return (
    <div className="dashboard-renderer">
      <PageRenderer page={dashboardConfig} />
    </div>
  );
};

export default DashboardRenderer;
