import React from 'react';
import { addCart, getCart } from '../services/cartFunctions';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      productCart: [],
    };
  }

  componentDidMount() {
    this.setState({
      productCart: [...getCart()],
    });
  }

  increaseQuantity = (product) => {
    addCart(product);
    this.setState({
      productCart: [...getCart()],
    });
  }

  decreaseQuantity = (product) => {
    console.log(product);
  }

  render() {
    const { productCart } = this.state;
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
                    <div key={ product[0] }>
                      <h2
                        data-testid="shopping-cart-product-name"

                      >
                        {product[0]}
                      </h2>
                      <button
                        type="button"
                        data-testid="product-increase-quantity"
                        onClick={ () => this.increaseQuantity({
                          produto: product[0],
                          preco: product[1].price,
                        }) }
                      >
                        <h2>+</h2>
                      </button>
                      { product[1].qtd }
                      <button
                        type="button"
                        data-testid="product-decrease-quantity"
                        onClick={ () => this.decreaseQuantity(product[0]) }
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
