import React, { useEffect, useRef, useState } from "react";
import { useDebounce } from "./useDebounce";

function SmartSearch() {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 400);

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const abortRef = useRef(null);

  useEffect(() => {
    if (!debouncedQuery) {
      setResults([]);
      return;
    }

    // Cancel previous request
    if (abortRef.current) {
      abortRef.current.abort();
    }

    const controller = new AbortController();
    abortRef.current = controller;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(
          `https://dummyjson.com/products/search?q=${debouncedQuery}`,
          { signal: controller.signal }
        );

        if (!res.ok) throw new Error("Failed request");

        const data = await res.json();

        setResults(data.results || []);
      } catch (err) {
        if (err.name === "AbortError") return;
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => controller.abort();
  }, [debouncedQuery]);

  return (
    <div style={{ width: "400px", margin: "50px auto" }}>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "16px"
        }}
      />

      <div style={{ marginTop: "10px" }}>
        {loading && <p>Loading...</p>}

        {!loading && query && results.length === 0 && (
          <p>No results found</p>
        )}

        {error && <p style={{ color: "red" }}>{error}</p>}

        <ul>
          {results.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SmartSearch;