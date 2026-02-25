import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../CartSlice";

function CartItem({ setPage }) {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalAmount = items.reduce(
    (acc, item) =>
      acc +
      parseFloat(item.cost.substring(1)) * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h2>Total: ${totalAmount}</h2>

      {items.map((item) => (
        <div className="cart-card" key={item.name}>
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p>{item.cost}</p>
          <p>Qty: {item.quantity}</p>

          <button
            onClick={() =>
              dispatch(
                updateQuantity({
                  name: item.name,
                  amount: item.quantity + 1,
                })
              )
            }
          >
            +
          </button>

          <button
            onClick={() => {
              if (item.quantity > 1) {
                dispatch(
                  updateQuantity({
                    name: item.name,
                    amount: item.quantity - 1,
                  })
                );
              } else {
                dispatch(removeItem(item.name));
              }
            }}
          >
            -
          </button>

          <button onClick={() => dispatch(removeItem(item.name))}>
            Delete
          </button>
        </div>
      ))}

      <button onClick={() => setPage("plants")}>
        Continue Shopping
      </button>

      <button onClick={() => alert("Coming Soon")}>
        Checkout
      </button>
    </div>
  );
}

export default CartItem;