import React, { useEffect, useState, lazy, Suspense } from "react";
import axios from "axios";

const ProductItem = lazy(() => import("./ProductItem"));

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        const updatedProducts = response.data.products.map((product) => ({
          ...product,
          thumbnail: product.thumbnail || "https://via.placeholder.com/150",
        }));
        setProducts(updatedProducts);
        setFilteredProducts(updatedProducts);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch products");
        setLoading(false);
      });
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(query)
    );
    setFilteredProducts(filtered);
  };

  const handleSort = (sortType) => {
    let sortedProducts = [...filteredProducts];
    switch (sortType) {
      case "priceHighToLow":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case "priceLowToHigh":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case "rating":
        sortedProducts.sort((a, b) => b.rating - a.rating);
        break;
      case "title":
        sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        break;
    }
    setFilteredProducts(sortedProducts);
    setIsDropdownOpen(false);
  };

  if (loading) return <div className="text-center mt-10 text-blue-500">Loading...</div>;
  if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;

  return (
    <div className="p-6 bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 min-h-screen">
      <div className="flex flex-col md:flex-row gap-6 mb-8 items-center justify-between">
        <input
          type="text"
          placeholder="🔍 Search for products..."
          onChange={handleSearch}
          className="w-full md:w-1/3 p-3 border border-gray-300 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
        />
        <div className="relative w-full md:w-auto ml-auto">
          <button
            className="px-6 py-3 bg-sky-200 text-black font-medium rounded-full shadow-lg focus:ring-2 focus:outline-none focus:ring-blue-500 transition duration-200"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            Sort Options
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-full md:w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
              <button
                onClick={() => handleSort("priceHighToLow")}
                className="block w-full px-4 py-3 font-bold text-gray-700 hover:bg-gray-100 transition duration-150"
              >
                Price: High to Low
              </button>
              <button
                onClick={() => handleSort("priceLowToHigh")}
                className="block w-full px-4 py-3 font-bold text-gray-700 hover:bg-gray-100 transition duration-150"
              >
                Price: Low to High
              </button>
              <button
                onClick={() => handleSort("rating")}
                className="block w-full px-4 py-3 font-bold text-gray-700 hover:bg-gray-100 transition duration-150"
              >
                Rating
              </button>
              <button
                onClick={() => handleSort("title")}
                className="block w-full px-4 py-3 font-bold text-gray-700 hover:bg-gray-100 transition duration-150"
              >
                Title
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        <Suspense fallback={<div className="text-center col-span-full">Loading Products...</div>}>
          {filteredProducts.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </Suspense>
      </div>
    </div>
  );
};

export default ProductList;
