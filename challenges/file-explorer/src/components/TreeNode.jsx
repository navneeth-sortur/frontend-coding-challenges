import React, { useState, useRef, useEffect } from "react";
import {
  Folder,
  File,
  Edit2,
  Trash2,
  ChevronRight,
  ChevronDown,
  FolderPlus,
  FilePlus
} from "lucide-react";
import useOutsideClick from "../hooks/useOutsideClick";

const TreeNode = ({ node, onAdd, onRename, onDelete }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(null); // "file" | "folder" | null
  const [newName, setNewName] = useState(node.name);
  const [addName, setAddName] = useState("");

  const renameInputRef = useRef(null);
  const addInputRef = useRef(null);

  // Handle clicking outside edit/add inputs
  useOutsideClick(renameInputRef, () => setIsEditing(false));
  useOutsideClick(addInputRef, () => {
    setIsAdding(null);
    setAddName("");
  });

  // Focus input when adding a new node
  useEffect(() => {
    if (isAdding && addInputRef.current) {
      addInputRef.current.focus();
    }
  }, [isAdding]);

  const handleRename = () => {
    if (newName.trim()) {
      onRename(node.id, newName.trim());
    }
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (window.confirm(`Delete "${node.name}"?`)) {
      onDelete(node.id);
    }
  };

  const handleAdd = () => {
    if (addName.trim()) {
      onAdd(node.id, addName.trim(), isAdding);
    }
    setIsAdding(null);
    setAddName("");
  };

  const toggleExpand = () => {
    if (node.type === "folder") {
      setIsExpanded(prev => !prev);
    }
  };

  return (
    <div className="tree-node">
      <div className="node-content">
        <div className="node-left" onClick={toggleExpand}>
          {node.type === "folder" &&
            (isExpanded ? (
              <ChevronDown size={16} className="icon-toggle" />
            ) : (
              <ChevronRight size={16} className="icon-toggle" />
            ))}
          {node.type === "folder" ? (
            <Folder className="icon-folder" size={16} />
          ) : (
            <File className="icon-file" size={16} />
          )}

          {isEditing ? (
            <input
              ref={renameInputRef}
              value={newName}
              onChange={e => setNewName(e.target.value)}
              onKeyDown={e => e.key === "Enter" && handleRename()}
              className="rename-input"
              autoFocus
            />
          ) : (
            <span className="node-name">{node.name}</span>
          )}
        </div>

        <div className="node-actions">
          <Edit2
            size={14}
            className="icon-action"
            onClick={() => setIsEditing(true)}
          />
          <Trash2 size={14} className="icon-action" onClick={handleDelete} />

          {/* Folder-specific add buttons */}
          {node.type === "folder" && (
            <>
              <FolderPlus
                size={14}
                className="icon-action"
                title="Add Folder"
                onClick={() => {
                  setIsAdding("folder");
                  setIsExpanded(true);
                }}
              />
              <FilePlus
                size={14}
                className="icon-action"
                title="Add File"
                onClick={() => {
                  setIsAdding("file");
                  setIsExpanded(true);
                }}
              />
            </>
          )}
        </div>
      </div>

      {/* Render children if folder is expanded */}
      {node.type === "folder" && isExpanded && (
        <div className="node-children">
          {node.children.map(child => (
            <TreeNode
              key={child.id}
              node={child}
              onAdd={onAdd}
              onRename={onRename}
              onDelete={onDelete}
            />
          ))}

          {/* Add new node input */}
          {isAdding && (
            <input
              ref={addInputRef}
              type="text"
              className="add-input"
              placeholder={`Enter ${isAdding} name`}
              value={addName}
              onChange={e => setAddName(e.target.value)}
              onKeyDown={e => {
                if (e.key === "Enter") handleAdd();
                if (e.key === "Escape") {
                  setIsAdding(null);
                  setAddName("");
                }
              }}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default TreeNode;
