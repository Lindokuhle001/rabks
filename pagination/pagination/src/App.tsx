import React, { useEffect, useState } from "react";
import "./App.css";
import { Product } from "./types";

function App() {
  const productsPerPage = 4;

  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
      }
    }
    fetchProducts();
  }, []);

  const pageCount = Math.ceil(products.length / productsPerPage);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pageCount) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="app-container">
      <div className="container">
        {products
          .slice(
            (currentPage - 1) * productsPerPage,
            currentPage * productsPerPage
          )
          .map((product) => (
            <div key={product.id} className="product">
              <p>{product.title}</p>
              <img src={product.thumbnail} alt={product.description} />
            </div>
          ))}
      </div>
      <div className="pagination">
        <button
          className={currentPage === 1 ? "hidden" : ""}
          onClick={handlePreviousPage}
        >
          previous
        </button>
        {[...Array(pageCount)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={currentPage === index + 1 ? "currentPage" : ""}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={handleNextPage}
          className={currentPage === pageCount ? "hidden" : ""}
        >
          next
        </button>
      </div>
    </div>
  );
}

export default App;