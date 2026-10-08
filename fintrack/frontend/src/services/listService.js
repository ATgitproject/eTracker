export const getListData = async (listname) => {
  const response = await fetch("http://localhost:5000/api/lstdata", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      listname,
    }),
  });

  const result = await response.json();

  if (!response.ok || !result.success) {
    throw new Error(result.message || "Failed to fetch list data");
  }

  return result.data;
};
