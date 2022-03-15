import React from 'react';
import PropTypes from 'prop-types';

class CartItem extends React.Component {
  render() {
    const { title, price, qtd, increaseQuantity, decreaseQuantity } = this.props;
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
          onClick={ () => increaseQuantity(
            { title, price },
          ) }
        >
          <h2>+</h2>
        </button>
        <button
          type="button"
          data-testid="product-decrease-quantity"
          onClick={ () => decreaseQuantity(
            { title, price },
          ) }
        >
          <h2>-</h2>
        </button>
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
