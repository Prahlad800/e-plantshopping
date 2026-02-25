import { useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      <Navbar setPage={setPage} />

      {page === "home" && (
        <div className="landing">
          <h1>Welcome to Paradise Nursery</h1>
          <p>Your trusted houseplant partner 🌿</p>
          <button onClick={() => setPage("plants")}>
            Get Started
          </button>
        </div>
      )}

      {page === "plants" && <ProductList />}
      {page === "cart" && <CartItem setPage={setPage} />}
    </>
  );
}

export default App;