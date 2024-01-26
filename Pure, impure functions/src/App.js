import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const DataFetcher = ({ url }) => {
    const [data, setData] = useState(null);

    useEffect(() => {
      fetch(url)
        .then((response) => response.json())
        .then((result) => setData(result))
        .catch((error) => console.error(error));
    }, [url]);

    return <div>{data ? data.title : "Loading..."}</div>;
  };

  const Square = ({ value }) => {
    return <div className="square">{value}</div>;
  };

  return (
    <div className="App">
      <DataFetcher url="https://jsonplaceholder.typicode.com/posts/1"></DataFetcher>
      <Square value={2}></Square>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
