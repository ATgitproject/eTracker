"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";

export default function ThemeRegistry({ children }) {
    return (
        <AppRouterCacheProvider>
            {children}
        </AppRouterCacheProvider>
    );
}