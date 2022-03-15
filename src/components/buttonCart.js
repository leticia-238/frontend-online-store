import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import PropTypes from 'prop-types';

class ButtonCart extends React.Component {
  render() {
    const { items } = this.props;
    return (
      <Link
        data-testid="shopping-cart-button"
        to="/cart"
        className="buttonCart"
      >
        <FaShoppingCart />
        <div data-testid="shopping-cart-size">{items}</div>
      </Link>
    );
  }
}

ButtonCart.propTypes = {
  items: PropTypes.number.isRequired,
};

export default ButtonCart;
