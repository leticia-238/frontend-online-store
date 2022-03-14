import React from 'react';
import { getCart } from '../services/cartFunctions';

class Cart extends React.Component {
  render() {
    const productCart = getCart();
    return (
      <div>
        {
          productCart.length === 0
            ? (
              <h2
                data-testid="shopping-cart-empty-message"
              >
                Seu carrinho está vazio
              </h2>
            )
            : (
              <div>
                {
                  productCart.map((product) => (
                    <div key={ product }>
                      <h2
                        data-testid="shopping-cart-product-name"

                      >
                        {product}
                      </h2>
                      <button
                        type="button"
                        data-testid="product-increase-quantity"
                      >
                        <h2>+</h2>
                      </button>
                      <button
                        type="button"
                        data-testid="product-decrease-quantity"
                      >
                        <h2>-</h2>
                      </button>
                    </div>
                  ))
                }
                <h3
                  data-testid="shopping-cart-product-quantity"
                >
                  {`Quantidade de produtos: ${productCart.length}`}
                </h3>
              </div>
            )
        }
      </div>
    );
  }
}

export default Cart;
