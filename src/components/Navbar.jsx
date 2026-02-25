import { useSelector } from "react-redux";

function Navbar({ setPage }) {
  const totalItems = useSelector((state) =>
    state.cart.items.reduce((acc, item) => acc + item.quantity, 0)
  );

  return (
    <nav className="navbar">
      <h2 onClick={() => setPage("home")}>Paradise Nursery</h2>

      <div className="nav-links">
        <button onClick={() => setPage("plants")}>Plants</button>
        <button onClick={() => setPage("cart")}>
          🛒 Cart ({totalItems})
        </button>
      </div>
    </nav>
  );
}

export default Navbar;