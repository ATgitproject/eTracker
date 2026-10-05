"use client";

import { usePathname, useRouter } from "next/navigation";
import {
  WalletCards,
  LayoutDashboard,
  ReceiptText,
  PieChart,
  Wallet,
  BriefcaseBusiness,
  ShieldCheck,
  BarChart3,
  Bot,
  Settings,
  ChevronRight,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";

import navigation from "../../../config/navigation";

import "./Sidebar.scss";

const iconMap = {
  dashboard: LayoutDashboard,
  transactions: ReceiptText,
  categories: PieChart,
  budgets: Wallet,
  subscriptions: BriefcaseBusiness,
  audit: ShieldCheck,
  reports: BarChart3,
  ai_assistant: Bot,
  settings: Settings,
};

const Sidebar = ({ collapsed = false, onToggle }) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <aside className={`sidebar ${collapsed ? "sidebar--collapsed" : ""}`}>
      {/* Brand */}
      <div className="sidebar__brand">
        <div className="sidebar__brand-icon">
          <WalletCards size={27} strokeWidth={2.2} />
        </div>

        <div className="sidebar__brand-name">
          <span>Expenses</span>
          <span>Tracker</span>
        </div>

        {/* Collapse Button */}
        <button
          type="button"
          className="sidebar__toggle"
          onClick={onToggle}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? (
            <PanelLeftOpen size={18} />
          ) : (
            <PanelLeftClose size={18} />
          )}
        </button>
      </div>

      {/* Navigation */}
      <nav className="sidebar__navigation">
        {navigation.map((item) => {
          const Icon = iconMap[item.icon];

          const isActive =
            pathname === item.path || pathname.startsWith(`${item.path}/`);

          return (
            <button
              key={item.id}
              type="button"
              className={`sidebar__item ${
                isActive ? "sidebar__item--active" : ""
              }`}
              onClick={() => router.push(item.path)}
              title={collapsed ? item.name : undefined}
            >
              <span className="sidebar__item-icon">
                {Icon && <Icon size={23} strokeWidth={2} />}
              </span>

              <span className="sidebar__item-label">{item.name}</span>
            </button>
          );
        })}
      </nav>

      {/* User */}
      <div className="sidebar__user">
        <div className="sidebar__user-avatar">JD</div>

        <div className="sidebar__user-info">
          <span className="sidebar__user-name">John Doe</span>

          <span className="sidebar__user-email">john.doe@example.com</span>
        </div>

        <ChevronRight className="sidebar__user-arrow" size={18} />
      </div>
    </aside>
  );
};

export default Sidebar;
