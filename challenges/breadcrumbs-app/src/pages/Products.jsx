import { Outlet } from "react-router-dom";

export default function Products() {
  return (
    <div>
      <h2>🛍️ Products</h2>
      <p>Select a category below:</p>

      {/* This is where child routes like /products/electronics will render */}
      <Outlet />
    </div>
  );
}
