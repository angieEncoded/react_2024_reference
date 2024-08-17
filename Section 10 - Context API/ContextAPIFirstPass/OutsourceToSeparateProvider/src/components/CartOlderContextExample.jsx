import { CartContext } from "../store/cart-context"; // we need this in order to consume the context
// This approach does not use the useContext hook

export default function Cart({ onUpdateItemQuantity }) {

  return (
    // Older way - use a consumer to wrap all the jsx into a function
    <CartContext.Consumer>
      {(cartContextConnection) => {

        const totalPrice = cartContextConnection.items.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        );
        const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

        return (
          <div id="cart">
            {/* now we can get the data in the context from this */}
            {cartContextConnection.items.length === 0 && <p>No items in cart!</p>}
            {cartContextConnection.items.length > 0 && (
              <ul id="cart-items">
                {cartContextConnection.items.map((item) => {
                  const formattedPrice = `$${item.price.toFixed(2)}`;

                  return (
                    <li key={item.id}>
                      <div>
                        <span>{item.name}</span>
                        <span> ({formattedPrice})</span>
                      </div>
                      <div className="cart-item-actions">
                        <button onClick={() => onUpdateItemQuantity(item.id, -1)}>
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => onUpdateItemQuantity(item.id, 1)}>
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
        )
      }}

    </CartContext.Consumer>
  );
}
