export const setCookie = (cname, cvalue, exdays) => {
  if (typeof document === "undefined") return;

  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);

  var expires = "expires=" + d.toUTCString();

  let data = cname + "=" + cvalue + ";";

  if (exdays) {
    data += expires + ";path=/";
  }

  document.cookie = data;
};

export const getCookie = (cname) => {
  if (typeof document === "undefined") return "";

  var name = cname + "=";
  var ca = document.cookie.split(";");

  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];

    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }

    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }

  return "";
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
