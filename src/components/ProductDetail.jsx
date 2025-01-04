import React from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const ProductDetail = () => {
  const location = useLocation();
  const productDetail = location.state?.product;
  const dispatch = useDispatch();

  if (!productDetail) {
    return (
      <div className="p-8 text-center text-gray-500 text-xl font-semibold">
        No product selected!
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch(addToCart(productDetail));
    alert(`${productDetail.title} added to cart!`);
  };

  return (
    <div className="p-8 bg-gradient-to-r from-indigo-100 via-purple-100 to-indigo-200 min-h-screen">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 shadow-lg p-6 bg-white rounded-xl">
        <div className="flex-1">
          <div className="relative group">
            <div className="w-full max-w-md mx-auto rounded-2xl shadow-xl overflow-hidden bg-gray-100">
              <img
                src={productDetail.images[0]}
                alt={productDetail.title}
                className="w-full h-auto object-cover transform transition duration-300 group-hover:scale-110"
              />
            </div>
            <div className="absolute top-3 right-3 bg-indigo-600 text-white text-sm px-3 py-1 rounded-lg shadow-md">
              ⭐ {productDetail.rating}
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl font-extrabold text-gray-800">{productDetail.title}</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            {productDetail.description}
          </p>
          <p className="text-3xl font-bold text-indigo-600">${productDetail.price}</p>
          <div className="space-y-3">
            <p className="text-base text-gray-500">
              <span className="font-semibold text-indigo-700">Brand:</span> {productDetail.brand}
            </p>
            <p className="text-base text-gray-500">
              <span className="font-semibold text-indigo-700">Warranty:</span>{" "}
              {productDetail.warrantyInformation || "N/A"}
            </p>
            <p className="text-base text-gray-500">
              <span className="font-semibold text-indigo-700">Category:</span>{" "}
              {productDetail.category}
            </p>
          </div>
          <button
            onClick={handleAddToCart}
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 rounded-lg text-lg font-medium shadow-lg hover:shadow-xl hover:from-indigo-600 hover:to-purple-700 transition duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

