import { createNode } from "./treeNode";
import { addNode, renameNode, deleteNode } from "./treeUtils";

describe("Tree Utilities", () => {
  let tree;

  beforeEach(() => {
    tree = [createNode("src", "folder"), createNode("public", "folder")];
    tree[0].children.push(createNode("index.js", "file"));
  });

  test("should add a new file under a folder", () => {
    const folderId = tree[0].id;
    const updated = addNode(tree, folderId, "app.js", "file");

    const srcFolder = updated.find(n => n.id === folderId);
    expect(srcFolder.children.some(c => c.name === "app.js")).toBe(true);
  });

  test("should add a new folder at root level", () => {
    const updated = addNode(tree, null, "components", "folder");
    expect(updated.some(n => n.name === "components")).toBe(true);
  });

  test("should rename an existing node", () => {
    const nodeId = tree[0].children[0].id;
    const updated = renameNode(tree, nodeId, "main.js");

    const renamedFile = updated[0].children.find(c => c.id === nodeId);
    expect(renamedFile.name).toBe("main.js");
  });

  test("should delete a file", () => {
    const nodeId = tree[0].children[0].id;
    const updated = deleteNode(tree, nodeId);

    const srcFolder = updated.find(n => n.name === "src");
    expect(srcFolder.children.length).toBe(0);
  });

  test("should delete an entire folder and its children", () => {
    const folderId = tree[0].id;
    const updated = deleteNode(tree, folderId);
    expect(updated.some(n => n.id === folderId)).toBe(false);
  });
});
