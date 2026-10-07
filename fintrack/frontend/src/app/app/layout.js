"use client";

import { useState } from "react";
import Sidebar from "../../components/layout/Sidebar/Sidebar";

import "./app.scss";


export default function AppLayout({ children }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed((previous) => !previous);
  };

  return (
    <div
      className={`app-layout ${
        sidebarCollapsed ? "app-layout--collapsed" : ""
      }`}
    >
      <Sidebar collapsed={sidebarCollapsed} onToggle={toggleSidebar} />
      <main className="app-layout__content">{children}</main>
    </div>
  );
}
