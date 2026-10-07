import ThemeRegistry from "./ThemeRegistry";

import "../styles/master.scss";
import ToastProvider from "../components/toast/ToastProvider";

export const metadata = {
  title: "Expenses Tracker",
  description: "Manage your expenses, budgets and financial goals.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          {children}
          <ToastProvider />
        </ThemeRegistry>
      </body>
    </html>
  );
}
