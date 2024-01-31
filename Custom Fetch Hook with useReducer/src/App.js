import React from "react";
import { useFetch } from "./useFetch";

const App = () => {
  const apiUrl = "https://randomuser.me/api/";

  const { loading, data, error } = useFetch({ url: apiUrl });

  return (
    <div>
      <h1>useFetch Example</h1>

      {loading && <p>Loading...</p>}

      {error && <p>Error: {error}</p>}

      {data && (
        <div>
          <h2>Fetched Data:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default App;
