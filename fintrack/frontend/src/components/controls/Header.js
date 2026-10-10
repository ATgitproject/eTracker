"use client";
import React from "react";
import { WalletCards } from "lucide-react";

const Header = ({ title = "Expenses", subtitle = "Tracker" }) => {
  return (
    <div className="app-header">
      <div className="app-header__logo">
        <WalletCards size={47} strokeWidth={2} />
      </div>

      <div className="app-header__text">
        <span className="app-header__title">{title}</span>

        <span className="app-header__subtitle">{subtitle}</span>
      </div>
    </div>
  );
};

export { Header };
export default Header;
