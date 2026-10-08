"use client";

import PageController from "@/components/pageController/PageController";
import dashboardConfig from "./dashboardRender.json";

const DashboardRenderer = () => {
  return (
    <div className="dashboard-renderer">
      <PageController page={dashboardConfig} />
    </div>
  );
};

export default DashboardRenderer;
