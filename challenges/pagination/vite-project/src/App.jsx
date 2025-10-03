import { useState, useEffect } from "react";
import Pagination from "./components/Pagination";
import ProductCard from "./components/ProductCard";
import "./App.css";

const ITEMS_PER_PAGE = 9;

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const skip = (currentPage - 1) * ITEMS_PER_PAGE;
      const res = await fetch(
        `https://dummyjson.com/products?limit=${ITEMS_PER_PAGE}&skip=${skip}`
      );

      const data = await res.json();
      console.log("🚀 ~ fetchProducts ~ data:", data);

      setProducts(data.products);
      setTotalProducts(data.total);
      setLoading(false);
    };

    fetchProducts();
  }, [currentPage]);

  return (
    <div className="App">
      <h2> Product List (Page {currentPage})</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="product-grid">
          {Array.isArray(products) &&
            products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      )}
      <Pagination
        currentPage={currentPage}
        totalItems={totalProducts}
        itemsPerPage={ITEMS_PER_PAGE}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

export default App;
