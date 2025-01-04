import React from 'react';

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-200">
      <h1 className="text-6xl font-extrabold text-gray-800 mb-6">404</h1>
      <p className="text-2xl text-gray-600 text-center max-w-xl">
        Oops! The page you're looking for doesn't exist.
      </p>
    </div>
  );
};

export default NotFound;
