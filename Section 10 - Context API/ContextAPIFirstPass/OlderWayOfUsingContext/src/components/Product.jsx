import { CartContext } from "../store/cart-context";
import { useContext } from "react";

export default function Product({
  id,
  image,
  title,
  price,
  description,
}) {
  // pull in the context so we can get the function we want
  const cartContext = useContext(CartContext); 


  return (
    <article className="product">
      <img src={image} alt={title} />
      <div className="product-content">
        <div>
          <h3>{title}</h3>
          <p className='product-price'>${price}</p>
          <p>{description}</p>
        </div>
        <p className='product-actions'>
          {/* We can now pull the function in through the context */}
          <button onClick={() => cartContext.addItemToCart(id)}>Add to Cart</button>
        </p>
      </div>
    </article>
  );
}
