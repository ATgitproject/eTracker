import dayjs from "dayjs";

export const setCookie = (cname, cvalue, exdays) => {
  if (typeof document === "undefined") return;

  let cookie = `${cname}=${encodeURIComponent(cvalue)}; path=/; SameSite=Lax`;

  if (exdays) {
    const date = new Date();
    date.setTime(date.getTime() + exdays * 24 * 60 * 60 * 1000);
    cookie += `; expires=${date.toUTCString()}`;
  }

  document.cookie = cookie;
};

export const getCookie = (cname) => {
  if (typeof document === "undefined") return "";

  const prefix = `${cname}=`;
  const cookie = document.cookie
    .split("; ")
    .find((item) => item.startsWith(prefix));

  if (!cookie) return "";

  return decodeURIComponent(cookie.substring(prefix.length));
};

export const deleteCookie = (name) => {
  if (typeof document === "undefined") return;
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
};

export const getPageAction = (toolbarAction) => {
  switch (toolbarAction) {
    case "add":
      return "create";
    case "edit":
      return "get";
    case "view":
      return "view";
    default:
      return toolbarAction;
  }
};

export const PERIOD_TYPES = (type) => {
  switch (type?.toLowerCase()) {
    case "weekly":
      return { label: "Weekly", unit: "week", count: 1 };
    case "monthly":
      return { label: "Monthly", unit: "month", count: 1 };
    case "quarterly":
      return { label: "Quarterly", unit: "month", count: 3 };
    case "yearly":
      return { label: "Yearly", unit: "year", count: 1 };
    case "custom":
      return {};
    default:
      return {};
  }
};

export const getMonthRange = (label) => {
  const d = dayjs(label, "MMM YYYY");
  return {
    start: d.startOf("month").format("YYYY-MM-DD"),
    end: d.endOf("month").format("YYYY-MM-DD"),
  };
};
