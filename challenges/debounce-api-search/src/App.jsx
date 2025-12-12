import { useState, useEffect, useRef } from "react";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const debounceRef = useRef(null);
  const abortRef = useRef(null);

  const handleChange = e => {
    const value = e.target.value;

    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      setInputValue(value);
    }, 500);
  };

  useEffect(() => {
    if (!inputValue.trim()) {
      setResults([]);
      setError("");
      return;
    }

    if (abortRef.current) {
      abortRef.current.abort();
    }

    const controller = new AbortController();
    abortRef.current = controller;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError("");

        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users?name_like=${inputValue}`,
          { signal: controller.signal }
        );

        if (!res.ok) throw new Error("API error occurred");

        const data = await res.json();
        setResults(data);
      } catch (err) {
        if (err.name === "AbortError") return; // ignore cancelled requests
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => controller.abort();
  }, [inputValue]);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h2>User Search</h2>

      <input
        type="text"
        placeholder="Type a name..."
        onChange={handleChange}
        style={{ padding: "8px", width: "260px" }}
      />

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && results.length > 0 && (
        <ul>
          {results.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}

      {!loading && results.length === 0 && inputValue && (
        <p>No results found.</p>
      )}
    </div>
  );
}
