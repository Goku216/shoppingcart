import React, { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const products = await response.json();
      setData(products);
    }

    fetchData();
  }, [url]);

  return data;
};
