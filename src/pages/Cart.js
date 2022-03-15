import React from 'react';
import { addCart, getCart, removeCart } from '../services/cartFunctions';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      productCart: [],
    };
  }

  componentDidMount() {
    this.setState({ productCart: [...getCart()] });
  }

  increaseQuantity = (product) => {
    addCart(product);
    this.setState({
      productCart: [...getCart()],
    });
  }

  decreaseQuantity = (title) => {
    removeCart(title);
    this.setState({ productCart: [...getCart()] });
  }

  quantityProducts = () => {
    const { productCart } = this.state;
    let qtdTotal = 0;
    productCart.forEach((arrayProduct) => {
      qtdTotal += arrayProduct[1].qtd;
    });
    return qtdTotal;
  }

  render() {
    const { productCart } = this.state;
    return (
      <div>
        {
          productCart.length === 0
            ? (
              <h2 data-testid="shopping-cart-empty-message">
                Seu carrinho está vazio
              </h2>
            )
            : (
              <>
                <div>
                  {
                    productCart.map((product) => (
                      <div key={ product[0] }>
                        <h2 data-testid="shopping-cart-product-name">
                          { product[0] }
                        </h2>
                        <p data-testid="shopping-cart-product-quantity">
                          { product[1].qtd }
                        </p>
                        <button
                          type="button"
                          data-testid="product-increase-quantity"
                          onClick={ () => this.increaseQuantity(
                            { title: product[0], price: product[1].price },
                          ) }
                        >
                          <h2>+</h2>
                        </button>
                        <button
                          type="button"
                          data-testid="product-decrease-quantity"
                          onClick={ () => this.decreaseQuantity(
                            { title: product[0], price: product[1].price },
                          ) }
                        >
                          <h2>-</h2>
                        </button>
                      </div>
                    ))
                  }
                </div>
                <h3 data-testid="shopping-cart-product-quantity">
                  { this.quantityProducts() }
                </h3>
              </>
            )
        }
      </div>
    );
  }
}

export default Cart;
