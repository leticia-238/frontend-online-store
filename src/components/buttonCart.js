import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

class ButtonCart extends React.Component {
  render() {
    return (
      <Link
        data-testid="shopping-cart-button"
        to="/cart"
        className="buttonCart"
      >
        <FaShoppingCart />
      </Link>
    );
  }
}

export default ButtonCart;
