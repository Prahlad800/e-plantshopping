🌿 e-plantShopping
Paradise Nursery Shopping Application

Welcome to e-plantShopping, a React + Redux based online plant shopping cart application.

This project simulates a real-world e-commerce plant nursery where users can browse plants, add them to a shopping cart, update quantities, and view the total price dynamically.

📌 Project Description

Paradise Nursery is an online houseplant store offering different categories of plants such as:

🌱 Medicinal Plants

🌸 Aromatic Plants

🪴 Indoor Decorative Plants

This application demonstrates:

React functional components

React Hooks (useState)

Redux Toolkit for global state management

Dynamic rendering using map()

Event handling and real-time UI updates

🚀 Features
🏠 Landing Page

Background image

Company name and description

"Get Started" button to navigate to products

🌿 Product Listing Page

Displays multiple plant categories

Each plant card includes:

Image

Name

Description

Price

Add to Cart button

Cart icon dynamically updates total quantity

🛒 Shopping Cart Page

Displays selected plants

Shows:

Plant image

Name

Unit price

Quantity

Subtotal

Includes:

Increase (+) button

Decrease (-) button

Delete button

Continue Shopping button

Checkout button (Coming Soon)

🛠 Technologies Used

React

Redux Toolkit

React-Redux

JavaScript (ES6)

CSS

Vite

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
⚙️ How to Run the Project Locally

Follow these steps:

Step 1: Clone the Repository
git clone https://github.com/your-username/e-plantShopping.git
Step 2: Navigate into Project Folder
cd e-plantShopping
Step 3: Install Dependencies
npm install
Step 4: Start Development Server
npm run dev

OR (if using preview mode)

npm run preview
Step 5: Open in Browser

Visit:

http://localhost:5173/
🔄 Redux Implementation

The application uses Redux Toolkit to manage cart state globally.

Implemented Reducers:

addItem() → Adds product to cart

removeItem() → Removes product from cart

updateQuantity() → Updates item quantity

Cart updates are reflected instantly in:

Cart total amount

Individual item subtotal

Cart icon item count

🌍 Deployment

The project can be deployed using:

GitHub Pages

Netlify

Vercel

Make sure:

Repository name is e-plantShopping

Repository is public

All files are committed and pushed

Live deployed URL works correctly

🎯 Learning Outcomes

After completing this project, the following concepts were applied:

React component composition and nesting

State management using Hooks

Global state management using Redux Toolkit

Dynamic UI rendering

Event handling and conditional logic

👨‍💻 Author

Developed as part of IBM Final Project
Paradise Nursery Shopping Application
