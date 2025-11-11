import React, { useEffect, useState } from "react";
import ProgressBar from "./components/ProgressBar";
import "./styles/progress.css";

export default function App() {
  const [value, setValue] = useState(0);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setValue(prev => prev + 1);
    }, 100);
  }, []);

  return (
    <main className="app">
      <h3 id="heading" className="">
        Progress Bar Demo
      </h3>
      <ProgressBar value={value} onComplete={() => setStatus(true)} />
      <div className="status-text">
        {status ? "Completed ✅ " : "Loading..."}
      </div>
    </main>
  );
}
