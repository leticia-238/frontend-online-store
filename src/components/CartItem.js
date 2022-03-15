import React from 'react';
import PropTypes from 'prop-types';
import { getCart } from '../services/cartFunctions';

class CartItem extends React.Component {
  constructor() {
    super();
    this.state = {
      hasQuantity: false,
      newAvailableQtd: 0,
    };
  }

  componentDidMount() {
    const { title } = this.props;
    this.getAvailableQuantity(title);
  }

  getAvailableQuantity = (title) => {
    const productName = getCart().find((product) => (product[0] === title));
    if (productName) {
      this.setState({
        hasQuantity: (productName[1].availableQtd - productName[1].qtd) < 1,
        newAvailableQtd: productName[1].availableQtd - productName[1].qtd,
      });
    }
  }

  render() {
    const { title, price, qtd, increaseQuantity, decreaseQuantity } = this.props;
    const { hasQuantity, newAvailableQtd } = this.state;
    return (
      <div key={ title }>
        <h2 data-testid="shopping-cart-product-name">
          { title }
        </h2>
        <p data-testid="shopping-cart-product-quantity">
          { qtd }
        </p>
        <button
          type="button"
          data-testid="product-increase-quantity"
          onClick={ () => {
            increaseQuantity({ title, price });
            this.getAvailableQuantity(title);
          } }
          disabled={ hasQuantity }
        >
          <h2>+</h2>
        </button>
        <button
          type="button"
          data-testid="product-decrease-quantity"
          onClick={ () => {
            decreaseQuantity({ title, price });
            this.getAvailableQuantity(title);
          } }
          disabled={ hasQuantity }
        >
          <h2>-</h2>
        </button>
        <p>
          Quantidade disponível
          {newAvailableQtd}
        </p>
      </div>
    );
  }
}

CartItem.propTypes = {
  title: PropTypes.string.isRequired,
  qtd: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  increaseQuantity: PropTypes.func.isRequired,
  decreaseQuantity: PropTypes.func.isRequired,
};

export default CartItem;
