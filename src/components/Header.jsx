import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-gray-600 text-white p-4 sticky top-0 w-full z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center flex-wrap">
        <Link to="/" className="text-2xl font-bold text-sky-300 transition mb-2 sm:mb-0">
          ShoppyGlobe
        </Link>
        <nav className="flex space-x-6 text-center">
          <Link to="/" className="hover:text-sky-300 transition text-xl font-semibold">
            Home
          </Link>
          <Link
            to="/cart"
            className="relative hover:text-sky-300 transition text-lg font-semibold flex items-center"
          >
            <FaShoppingCart className="text-xl mr-2" />
            Cart
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
                {cartCount}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
