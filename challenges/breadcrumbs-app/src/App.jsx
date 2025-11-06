import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import routesData from "./data/routesData";
import Breadcrumbs from "./components/Breadcrumbs";
import * as Pages from "./pages";

function renderRoutes(routes) {
  return routes.map(route => {
    const Component = Pages[route.component];

    if (!Component) {
      console.warn(`⚠️ No component found for ${route.component}`);
      return null;
    }

    if (route.children) {
      return (
        <Route key={route.path} path={route.path} element={<Component />}>
          {renderRoutes(route.children)}
        </Route>
      );
    }

    return <Route key={route.path} path={route.path} element={<Component />} />;
  });
}

// Helper to generate nav links
function renderNavLinks(routes, basePath = "") {
  return routes.map(route => {
    const fullPath = `${basePath}${
      route.path.startsWith("/") ? route.path : "/" + route.path
    }`;

    return (
      <div key={fullPath} style={{ marginRight: "12px" }}>
        <Link to={fullPath}>{route.label}</Link>
        {route.children && (
          <div style={{ marginLeft: "16px", marginTop: "4px" }}>
            {renderNavLinks(route.children, fullPath)}
          </div>
        )}
      </div>
    );
  });
}

export default function App() {
  return (
    <Router>
      <div style={{ padding: "20px" }}>
        <Breadcrumbs />
        <hr />

        <div style={{ margin: "20px 0" }}>
          <Routes>{renderRoutes(routesData)}</Routes>
        </div>

        <nav
          style={{
            borderTop: "1px solid #ddd",
            paddingTop: "10px",
            marginTop: "20px"
          }}
        >
          <h4 style={{ marginBottom: "8px" }}>Navigation</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            {renderNavLinks(routesData)}
          </div>
        </nav>
      </div>
    </Router>
  );
}
