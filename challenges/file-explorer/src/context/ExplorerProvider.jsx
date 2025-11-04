import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useCallback
} from "react";
import {
  addNode,
  renameNode,
  deleteNode,
  toggleNodeOpen
} from "../utils/treeUtils";

// --------------------------------------
// Local Storage Keys
// --------------------------------------
const STORAGE_KEY = "file_explorer_tree_v1";

// --------------------------------------
// Initial State
// --------------------------------------
const initialState = {
  tree: [],
  isLoading: true,
  error: null
};

// --------------------------------------
// Reducer Actions
// --------------------------------------
const ACTIONS = {
  LOAD_TREE: "LOAD_TREE",
  ADD_NODE: "ADD_NODE",
  RENAME_NODE: "RENAME_NODE",
  DELETE_NODE: "DELETE_NODE",
  TOGGLE_NODE: "TOGGLE_NODE",
  SET_ERROR: "SET_ERROR"
};

// --------------------------------------
// Reducer
// --------------------------------------
function explorerReducer(state, action) {
  try {
    switch (action.type) {
      case ACTIONS.LOAD_TREE:
        return { ...state, tree: action.payload || [], isLoading: false };

      case ACTIONS.ADD_NODE:
        return {
          ...state,
          tree: addNode(state.tree, action.parentId, action.payload)
        };

      case ACTIONS.RENAME_NODE:
        return {
          ...state,
          tree: renameNode(state.tree, action.nodeId, action.newName)
        };

      case ACTIONS.DELETE_NODE:
        return { ...state, tree: deleteNode(state.tree, action.nodeId) };

      case ACTIONS.TOGGLE_NODE:
        return { ...state, tree: toggleNodeOpen(state.tree, action.nodeId) };

      case ACTIONS.SET_ERROR:
        return { ...state, error: action.payload };

      default:
        console.warn("Unknown action:", action.type);
        return state;
    }
  } catch (error) {
    console.error("Reducer error:", error);
    return { ...state, error: error.message };
  }
}

// --------------------------------------
// Context Setup
// --------------------------------------
const ExplorerContext = createContext();

export function useExplorer() {
  const context = useContext(ExplorerContext);
  if (!context) {
    throw new Error("useExplorer must be used within ExplorerProvider");
  }
  return context;
}

// --------------------------------------
// Provider Component
// --------------------------------------
export function ExplorerProvider({ children }) {
  const [state, dispatch] = useReducer(explorerReducer, initialState);

  // -------------------------------
  // Load initial tree from localStorage
  // -------------------------------
  useEffect(() => {
    try {
      const savedTree = JSON.parse(localStorage.getItem(STORAGE_KEY));
      dispatch({ type: ACTIONS.LOAD_TREE, payload: savedTree || [] });
    } catch (err) {
      console.error("Failed to load from localStorage", err);
      dispatch({ type: ACTIONS.LOAD_TREE, payload: [] });
    }
  }, []);

  // -------------------------------
  // Persist tree to localStorage whenever it changes
  // -------------------------------
  useEffect(() => {
    if (state.isLoading) return; // skip first run
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.tree));
    } catch (err) {
      console.error("Failed to save tree:", err);
      dispatch({ type: ACTIONS.SET_ERROR, payload: "Failed to save changes" });
    }
  }, [state.tree, state.isLoading]);

  // -------------------------------
  // Action Dispatchers (wrapped)
  // -------------------------------
  const add = useCallback((parentId, newNode) => {
    dispatch({ type: ACTIONS.ADD_NODE, parentId, payload: newNode });
  }, []);

  const rename = useCallback((nodeId, newName) => {
    dispatch({ type: ACTIONS.RENAME_NODE, nodeId, newName });
  }, []);

  const remove = useCallback(nodeId => {
    dispatch({ type: ACTIONS.DELETE_NODE, nodeId });
  }, []);

  const toggle = useCallback(nodeId => {
    dispatch({ type: ACTIONS.TOGGLE_NODE, nodeId });
  }, []);

  const value = {
    tree: state.tree,
    isLoading: state.isLoading,
    error: state.error,
    actions: {
      add,
      rename,
      remove,
      toggle
    }
  };

  return (
    <ExplorerContext.Provider value={value}>
      {children}
    </ExplorerContext.Provider>
  );
}
