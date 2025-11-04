import React from "react";
import FileExplorer from "./components/FileExplorer";
import "./styles/fileExplorer.css";

const App = () => {
  return (
    <div className="app-container">
      <h1 className="app-title">File Explorer</h1>
      <FileExplorer />
    </div>
  );
};

export default App;
