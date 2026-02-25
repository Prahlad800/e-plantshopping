🌱 Overview

Welcome to e-plantShopping, a modern plant shopping cart application built using React and Redux Toolkit.

This project simulates a real-world e-commerce plant nursery where users can:

🛍 Browse plants
➕ Add plants to cart
🔁 Update quantities
💰 View real-time total cost
❌ Remove items

The UI updates instantly using global state management with Redux.

🌿 Plant Categories

The application includes multiple categories:

🌱 Medicinal Plants
🌸 Aromatic Plants
🪴 Indoor Decorative Plants

Each category contains multiple plant cards with images, descriptions, and pricing.

🚀 Features
🏠 Landing Page

Beautiful background image

Company introduction

“Get Started” button

🌿 Product Listing Page

Each plant card displays:

📷 Image
🏷 Name
📝 Description
💵 Price
🛒 Add to Cart button

✔ Cart icon dynamically updates item count
✔ Add button disables after item is added

🛒 Shopping Cart Page

Displays:

🖼 Plant Image

🏷 Name

💵 Unit Price

🔢 Quantity

💰 Subtotal

Functional Buttons:

➕ Increase Quantity
➖ Decrease Quantity
🗑 Delete Item
🔙 Continue Shopping
💳 Checkout (Coming Soon)

🛠 Tech Stack
Technology	Purpose
⚛ React	UI Development
🧠 Redux Toolkit	Global State Management
🔗 React-Redux	Connecting Store
🎨 CSS	Styling
⚡ Vite	Fast Build Tool
📂 Project Structure
e-plantShopping/
│
├── src/
│   ├── components/
│   │    ├── Navbar.jsx
│   │    ├── ProductList.jsx
│   │    ├── CartItem.jsx
│   │
│   ├── CartSlice.jsx
│   ├── store.js
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│
├── README.md
├── package.json
⚙️ Installation Guide

Follow these steps to run locally:

1️⃣ Clone Repository
git clone https://github.com/your-username/e-plantShopping.git
2️⃣ Move into Folder
cd e-plantShopping
3️⃣ Install Dependencies
npm install
4️⃣ Run Development Server
npm run dev

OR

npm run preview
5️⃣ Open in Browser
http://localhost:5173/
🔄 Redux Flow Diagram
User Clicks "Add to Cart"
        ↓
Dispatch addItem()
        ↓
CartSlice Reducer Updates State
        ↓
Redux Store Updates
        ↓
UI Re-renders Automatically
📊 Cart Logic Overview
Total Amount =
   Σ (Plant Price × Quantity)

✔ Quantity updates instantly
✔ Subtotal updates automatically
✔ Cart icon count updates in Navbar

🌍 Deployment

You can deploy using:

GitHub Pages

Netlify

Vercel

Before deployment:

✔ Repository name must be e-plantShopping
✔ Repository must be public
✔ All files committed and pushed

🎯 Learning Outcomes

This project demonstrates:

✔ React Component Composition
✔ useState Hook
✔ Redux Toolkit Integration
✔ Global State Management
✔ Dynamic Rendering using map()
✔ Real-time UI updates
✔ Event Handling

📈 Future Improvements

🔐 User Authentication
💳 Payment Integration
🔍 Product Search & Filter
📱 Responsive Design Improvements
🎨 Advanced UI Animations

👨‍💻 Author

Developed as part of IBM Final Project
Paradise Nursery Shopping Application
