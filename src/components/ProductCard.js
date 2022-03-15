import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { addCart } from '../services/cartFunctions';

class ProductCard extends React.Component {
  handleClick = (countItems) => {
    const { title, price } = this.props;
    addCart({
      title,
      price,
    });
    countItems();
  }

  render() {
    const { title, price, image, id, shipping, countItems } = this.props;
    const { free_shipping: freeShipping } = shipping;
    return (
      <>
        <Link to={ `/item/${id}` } data-testid="product-detail-link">
          <div data-testid="product">
            <h2>{ title }</h2>
            <img src={ image } alt={ title } />
          </div>
        </Link>
        <p>{ price }</p>
        {freeShipping && (
          <p data-testid="free-shipping">

            Frete grátis
          </p>
        )}
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => this.handleClick(countItems) }
        >
          Adicionar ao carrinho
        </button>
      </>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  countItems: PropTypes.func.isRequired,
  shipping: PropTypes.shape({
    free_shipping: PropTypes.bool,
  }).isRequired,
};

export default ProductCard;
