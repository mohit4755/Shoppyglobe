# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## 🌍 ShoppyGlobe
**ShoppyGlobe is a next-generation e-commerce platform designed to provide a seamless shopping experience. Built using React and Vite, it offers lightning-fast performance, a clean interface, and responsive design for users on any device.**


## ✨ key Features
**Blazing Fast**: Powered by Vite for rapid development and optimized production builds.

**Dynamic Product Display**: Fully functional ProductDetail component fetches and displays API-based product information.

**Cart Management**: Add, remove, and update items in the shopping cart.

**Responsive Design**: Optimized for mobile, tablet, and desktop using Tailwind CSS.

**Reusable Components**: Modular structure ensures maintainability and scalability.


## 🛠 Technologies Used

**Frontend**: React, Vite
**Styling**: Tailwind CSS
**Version Control**: Git


## ⚙️ Installation and Setup
To run ShoppyGlobe locally, follow these steps:

**Clone the Repository**:
git clone <repository-url>
cd shoppyglobe

**Install Dependencies**:
npm install

**Run the Development Server**:
npm run dev

**Access the App: Open your browser and navigate to http://localhost:5173.**



**🎨 Features in Detail**
## 1.Homepage:

i.Displays a list of available products with images, names, and prices.
ii.Easy navigation to detailed product pages.

## 2.Product Details:

i.Dynamic ProductDetail component to fetch and display API-driven product information.

## 3.Cart Management:

i.Add products to the cart directly from the product listing or detail pages.
ii.View, edit, and remove items in the cart.

## 4.User-Friendly Design:

i.Intuitive navigation bar and layout for seamless browsing.
ii.Responsive across devices.



shoppyglobe/
├── public/               # Static assets (e.g., icons, images)
├── src/
│   ├── assets/           # Media and static files
│   ├── components/       # Reusable React components
│   │   ├── Header.jsx    # Navigation bar
│   │   ├── ProductItem.jsx # Individual product card
│   │   ├── ProductDetail.jsx # Detailed product view
│   │   ├── Cart.jsx      # Shopping cart component
│   │   └── NotFound.jsx  # 404 page
│   ├── App.jsx           # Root application component
│   ├── main.jsx          # Application entry point
│   └── index.css         # Global styles
├── package.json          # Project metadata and scripts
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── README.md             # Documentation

## 🚀 Future Enhancements
**User Authentication**: Add secure login and registration functionality.
**Payment Integration**: Implement payment gateways like Stripe or PayPal.
**Search and Filter**: Enable dynamic product search and category filters.
**Order History**: Display past orders for authenticated users.
<!-- **Wishlist**: Allow users to save products for future purchases. -->