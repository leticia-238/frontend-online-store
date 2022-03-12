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
            )
        }
      </div>
    );
  }
}

export default Cart;
