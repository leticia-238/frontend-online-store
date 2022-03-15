import React from 'react';
import CartItem from '../components/CartItem';
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
    this.setState({ productCart: [...getCart()] });
  }

  decreaseQuantity = (product) => {
    removeCart(product);
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
              <div>
                {
                  productCart.map(([title, productInfo]) => (
                    <CartItem
                      key={ title }
                      title={ title }
                      { ...productInfo }
                      increaseQuantity={ this.increaseQuantity }
                      decreaseQuantity={ this.decreaseQuantity }
                    />))
                }
              </div>
            )
        }
      </div>
    );
  }
}

export default Cart;
