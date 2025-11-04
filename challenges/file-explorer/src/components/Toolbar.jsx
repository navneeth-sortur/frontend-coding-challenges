import React, { useState, useRef } from "react";
import { FolderPlus, FilePlus } from "lucide-react";
import useOutsideClick from "../hooks/useOutsideClick";

const Toolbar = ({ onAdd }) => {
  const [addingType, setAddingType] = useState(null);
  const [name, setName] = useState("");
  const inputRef = useRef(null);

  useOutsideClick(inputRef, () => {
    setAddingType(null);
    setName("");
  });

  const handleAdd = () => {
    if (name.trim()) {
      onAdd(null, name.trim(), addingType);
    }
    setAddingType(null);
    setName("");
  };

  return (
    <div className="toolbar">
      <button className="btn" onClick={() => setAddingType("folder")}>
        <FolderPlus size={16} /> New Folder
      </button>
      <button className="btn" onClick={() => setAddingType("file")}>
        <FilePlus size={16} /> New File
      </button>

      {addingType && (
        <input
          ref={inputRef}
          type="text"
          className="add-input"
          placeholder={`Enter ${addingType} name`}
          value={name}
          onChange={e => setName(e.target.value)}
          onKeyDown={e => e.key === "Enter" && handleAdd()}
          autoFocus
        />
      )}
    </div>
  );
};

export default Toolbar;
