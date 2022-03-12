import React from 'react';
import { getCart } from '../services/cartFunctions';

class Cart extends React.Component {
  render() {
    const productCart = getCart();
    return (
      <div>
        {
          productCart.map((product) => (
            <p
              data-testid="shopping-cart-product-name"
              key={ product }
            >
              {product}
            </p>
          ))
        }
        <h3
          data-testid="shopping-cart-product-quantity"
        >
          {`Quantidade de produtos: ${productCart.length}`}
        </h3>
      </div>
    );
  }
}

export default Cart;
