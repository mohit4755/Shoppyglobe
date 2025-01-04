import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../redux/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="p-6 bg-gradient-to-r from-green-100 to-blue-100 min-h-screen flex items-center justify-center">
        <p className="text-xl font-semibold text-gray-600">
          Your cart is empty! Add some products to get started.
        </p>
        <button
          className="ml-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
          onClick={() => navigate("/products")}
        >
          Browse Products
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gradient-to-r from-green-100 to-blue-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Your Cart</h2>
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all hover:bg-gray-100"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.images[0]}
                alt={item.title}
                className="w-20 h-20 object-cover rounded"
              />
              <div>
                <h3 className="font-bold text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-600">
                  Price: ${item.price.toFixed(2)}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => dispatch(decrementQuantity(item.id))}
                className={`bg-gray-300 text-gray-800 px-3 py-1 rounded hover:bg-gray-400 transition ${
                  item.quantity === 1 ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={item.quantity === 1}
              >
                -
              </button>
              <span className="font-semibold text-gray-800">{item.quantity}</span>
              <button
                onClick={() => dispatch(incrementQuantity(item.id))}
                className="bg-gray-300 text-gray-800 px-3 py-1 rounded hover:bg-gray-400 transition"
              >
                +
              </button>
            </div>
            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 border-t pt-4 text-right">
        <h3 className="text-xl font-bold text-gray-800">
          Total: ${totalPrice.toFixed(2)}
        </h3>
        <button
          className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-transform transform hover:scale-105 mt-4"
          onClick={() => navigate("/products")}
        >
          Add More Products
        </button>
      </div>
    </div>
  );
};

export default Cart;
