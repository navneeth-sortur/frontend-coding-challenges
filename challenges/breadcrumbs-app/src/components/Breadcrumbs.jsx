import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Breadcrumbs.css";

export default function Breadcrumbs() {
  const location = useLocation();

  const pathnames = location.pathname.split("/").filter(x => x);

  return (
    <nav style={{ marginBottom: "10px" }}>
      <Link to="/">Home</Link>
      {pathnames.map((name, index) => {
        const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
        const isLast = index === pathnames.length - 1;

        return (
          <span key={name}>
            {" / "}
            {isLast ? (
              <span style={{ color: "gray" }}>{decodeURIComponent(name)}</span>
            ) : (
              <Link to={routeTo}>{decodeURIComponent(name)}</Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
