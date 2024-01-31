import React from "react";
import { useQuery } from "react-query";

function DataFetchingComponent() {
  const { data, isLoading, isError } = useQuery("data", fetchData);

  // Define a function to fetch data from an API
  async function fetchData() {
    const response = await fetch("https://api.example.com/data");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error fetching data</p>;
  }

  return (
    <div>
      <h1>Data:</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataFetchingComponent;
