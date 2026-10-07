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
import { getCookie } from "../../../utils/genericUtils";
import { useSelector } from "react-redux";

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
  const { session } = useSelector((state) => state.userSessionDataReducer);
  const sessionCookie = JSON.parse(getCookie("session") || "{}");
  const userData = session?.userData || sessionCookie?.userData;

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

      <details className="sidebar__user-details">
        <summary className="sidebar__user">
          <div className="sidebar__user-avatar">JD</div>

          <div className="sidebar__user-info">
            <span className="sidebar__user-name">{userData?.name}</span>

            <span className="sidebar__user-email">{userData?.email}</span>
          </div>

          <ChevronRight className="sidebar__user-arrow" size={18} />
        </summary>

        <div className="sidebar__user-menu">
          <div className="sidebar__user-detail">
            <span>Username</span>
            <strong>{userData?.name}</strong>
          </div>

          <div className="sidebar__user-detail">
            <span>Email</span>
            <strong>{userData?.email}</strong>
          </div>

          <div className="sidebar__user-detail">
            <span>Date of Birth</span>
            <strong>{userData?.dob}</strong>
          </div>

          <div className="sidebar__user-detail">
            <span>Mobile</span>
            <strong>{userData?.mobile}</strong>
          </div>

          <button
            type="button"
            className="sidebar__signout"
            onClick={() => {
              router.push("/logout");
            }}
          >
            Logout
          </button>
        </div>
      </details>
    </aside>
  );
};

export default Sidebar;
