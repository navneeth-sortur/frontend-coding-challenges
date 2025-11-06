import { Outlet } from "react-router-dom";

export default function Electronics() {
  return (
    <div>
      <h3>🔌 Electronics</h3>
      <p>Choose a product type:</p>

      {/* Child routes like /products/electronics/phones appear here */}
      <Outlet />
    </div>
  );
}
