import { createNode } from "./treeNode";

/**
 * Recursively finds a node by ID and applies a callback to modify it.
 */
const traverseAndModify = (nodes, nodeId, modifier) => {
  return nodes.map(node => {
    if (node.id === nodeId) {
      return modifier(node);
    }

    if (node.type === "folder" && node.children.length > 0) {
      return {
        ...node,
        children: traverseAndModify(node.children, nodeId, modifier)
      };
    }

    return node;
  });
};

/**
 * Add a new node (file or folder) inside a folder.
 */
export const addNode = (tree, parentId, name, type) => {
  if (!name?.trim()) return tree;

  const newNode = createNode(name, type);

  // Add under root level if no parent specified
  if (!parentId) {
    return [...tree, newNode];
  }

  const updatedTree = traverseAndModify(tree, parentId, node => {
    if (node.type === "folder") {
      return {
        ...node,
        children: [...node.children, newNode]
      };
    }
    return node;
  });

  return updatedTree;
};

/**
 * Rename a node (file or folder) by ID.
 */
export const renameNode = (tree, nodeId, newName) => {
  if (!newName?.trim()) return tree;

  return traverseAndModify(tree, nodeId, node => ({
    ...node,
    name: newName
  }));
};

/**
 * Delete a node by ID (also removes its children if folder).
 */
export const deleteNode = (tree, nodeId) => {
  const filteredTree = tree
    .filter(node => node.id !== nodeId)
    .map(node =>
      node.type === "folder"
        ? { ...node, children: deleteNode(node.children, nodeId) }
        : node
    );

  return filteredTree;
};
