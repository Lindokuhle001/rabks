import { useEffect, useState } from "react";
import "./App.css";
import { Product } from "./types";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  async function getProducts() {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();

      return data.products;
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
  }

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts = await getProducts();

      setProducts(fetchedProducts);
      setPages(Math.round(products.length / 5));
    };
    fetchProducts();
  }, []);

  return (
    <>
      <div className="container">
        {products
          ?.slice(
            currentPage * productsPerPage - productsPerPage,
            currentPage * productsPerPage
          )
          .map((product) => {
            return (
              <div key={`${product.id}`} className="product">
                <p>{product["title"]}</p>
                <img src={product.thumbnail} alt={product.description} />
              </div>
            );
          })}
      </div>
      <div className="pagination">
        <button onClick={() => setCurrentPage(currentPage - 1)}>
          previous
        </button>
        {[...Array(Math.ceil(products.length / productsPerPage))].map(
          (_page, index) => {
            return (
              <button
                onClick={() => setCurrentPage(index + 1)}
                key={`${index}`}
              >
                {index + 1}
              </button>
            );
          }
        )}
        <button
          onClick={() => {
            setCurrentPage(currentPage + 1);
          }}
        >
          next
        </button>

      </div>
    </>
  );
}

export default App;
