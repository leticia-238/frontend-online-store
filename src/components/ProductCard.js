import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { title, price, image, id } = this.props;
    return (
      <Link to={ `/item/${id}` } data-testid="product-detail-link">
        <div data-testid="product">
          <h2>{ title }</h2>
          <p>{ price }</p>
          <img src={ image } alt={ title } />
        </div>
      </Link>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ProductCard;
