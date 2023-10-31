const getData = async () => {
  const res = await fetch("../data.json", {
    headers: { Accept: "application/json" },
  });

  if (!res.ok) {
    throw new Error({
      message: "Failed to fetch cars",
      statusText: res.statusText,
      status: res.status,
    });
  }
  const data = await res.json();
  return data;
};

export default getData;
