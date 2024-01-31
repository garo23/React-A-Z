import "./styles.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Create a cancellation token source
    const source = axios.CancelToken.source();

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        // Make the API request with a cancellation token
        const response = await axios.get('https://api.example.com/data', {
          cancelToken: source.token,
        });

        // Process the response only if it's the latest request
        setData(response.data);
      } catch (err) {
        if (axios.isCancel(err)) {
          // Request was cancelled, ignore errors
        } else {
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    };

    // Fetch data when the component mounts
    fetchData();

    // Cleanup function to cancel the request when the component unmounts
    return () => {
      source.cancel('Request canceled due to component unmounting');
    };
  }, []); // Empty dependency array ensures this effect runs once

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
