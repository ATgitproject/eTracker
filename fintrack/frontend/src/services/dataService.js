const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const saveData = async ({ objName, fields, id }) => {
  const accessToken = localStorage.getItem("accessToken");

  const response = await fetch(`${API_URL}/api/save`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      objName,
      fields,
      ...(id != null ? { id } : {}),
    }),
  });

  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(responseData.message || "Unable to save data");
  }

  return responseData;
};

export const getData = async ({
  objName,
  filterCondition,
  sortOrder,
  recordCount,
}) => {
  const accessToken = localStorage.getItem("accessToken");

  const response = await fetch(`${API_URL}/api/get`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      objName,
      ...(filterCondition ? { filterCondition } : {}),
      sortOrder,
      recordCount,
    }),
  });

  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(responseData.message || "Unable to get data");
  }

  return responseData;
};
