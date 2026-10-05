import ThemeRegistry from "./ThemeRegistry";

import "../styles/master.scss";

export const metadata = {
    title: "Expenses Tracker",
    description:
        "Manage your expenses, budgets and financial goals.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <ThemeRegistry>
                    {children}
                </ThemeRegistry>
            </body>
        </html>
    );
}