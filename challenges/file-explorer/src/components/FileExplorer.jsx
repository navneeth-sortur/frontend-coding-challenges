import React, { useState } from "react";
import { addNode, renameNode, deleteNode } from "../utils/treeUtils";
import { createNode } from "../utils/treeNode";
import TreeNode from "./TreeNode";
import Toolbar from "./Toolbar";

const FileExplorer = () => {
  const [tree, setTree] = useState([
    createNode("src", "folder"),
    createNode("public", "folder")
  ]);

  const handleAdd = (parentId, name, type) => {
    setTree(prev => addNode(prev, parentId, name, type));
  };

  const handleRename = (nodeId, newName) => {
    setTree(prev => renameNode(prev, nodeId, newName));
  };

  const handleDelete = nodeId => {
    setTree(prev => deleteNode(prev, nodeId));
  };

  return (
    <div className="explorer-container">
      <Toolbar onAdd={handleAdd} />
      <div className="tree-view">
        {tree.length === 0 ? (
          <p className="empty-text">No files or folders</p>
        ) : (
          tree.map(node => (
            <TreeNode
              key={node.id}
              node={node}
              onAdd={handleAdd}
              onRename={handleRename}
              onDelete={handleDelete}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default FileExplorer;
