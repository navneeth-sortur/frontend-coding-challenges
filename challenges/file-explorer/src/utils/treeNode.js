// Utility to generate unique IDs for tree nodes
const generateId = () => Math.random().toString(36).substr(2, 9);

/**
 * Creates a new file or folder node
 * @param {string} name - name of the file or folder
 * @param {"file" | "folder"} type - type of the node
 * @returns {object} - tree node object
 */
export const createNode = (name, type) => ({
  id: generateId(),
  name,
  type,
  children: type === "folder" ? [] : []
});
