import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice"; 


const ProductItem = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Access Redux dispatch function

  // Function to handle adding product to cart
  const handleAddToCart = (e) => {
    e.stopPropagation(); 
    dispatch(addToCart(product)); 
    alert(`${product.title} has been added to your cart!`); 
  };

  
  const handleNavigate = () => {
    navigate(`/product/${product.id}`, { state: { product } }); 
  };

  return (
    <div
      className="border bg-white p-4 cursor-pointer rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:bg-gray-300 hover:scale-105"
      onClick={handleNavigate} 
    >
      <img
        src={product.thumbnail || "https://via.placeholder.com/150"}
        alt={product.title}
        onError={(e) => (e.target.src = "https://via.placeholder.com/150")}
        className="w-full h-64 object-cover rounded mb-4"
      />
      <h3 className="font-bold text-lg text-gray-900 mb-2">{product.title}</h3>
      <p className="text-gray-600 text-sm mb-4 truncate">{product.description}</p>
      <p className="text-sky-600 font-semibold mb-4">${product.price}</p>

      
      <button
        className="bg-sky-500 text-white px-4 py-2 rounded hover:bg-slate-600 transition"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
      <button className="text-blue-500 ml-8 hover:underline hover:text-gray-600 text-sm">
        View Details
      </button>
    </div>
  );
};

export default ProductItem;
