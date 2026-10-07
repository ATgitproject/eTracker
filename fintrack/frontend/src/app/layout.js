import ThemeRegistry from "./ThemeRegistry";
import "../styles/master.scss";
import ToastProvider from "../components/toast/ToastProvider";
import ReduxProvider from "../redux/reduxProvider";

export const metadata = {
  title: "Expenses Tracker",
  description: "Manage your expenses, budgets and financial goals.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <ReduxProvider>{children}</ReduxProvider>
          <ToastProvider />
        </ThemeRegistry>
      </body>
    </html>
  );
}
