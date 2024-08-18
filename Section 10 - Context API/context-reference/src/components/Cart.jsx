import { CartContext } from "../store/shopping-cart-context";
import { useContext } from "react";

export default function Cart() {

  // establish connection to the cart context
  const cartContext = useContext(CartContext);
  // console.log(cartContext.items)

  const totalPrice = cartContext.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

  return (
    <div id="cart">
      {cartContext.items.length === 0 && <p>No items in cart!</p>}
      {cartContext.items.length > 0 && (
        <ul id="cart-items">
          {cartContext.items.map((item) => {
            const formattedPrice = `$${item.price.toFixed(2)}`;

            return (
              <li key={item.id}>
                <div>
                  <span>{item.name}</span>
                  <span> ({formattedPrice})</span>
                </div>
                <div className="cart-item-actions">
                  <button onClick={() => cartContext.updateItemQuantity(item.id, -1)}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => cartContext.updateItemQuantity(item.id, 1)}>
                    +
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <p id="cart-total-price">
        Cart Total: <strong>{formattedTotalPrice}</strong>
      </p>
    </div>
  );
}
