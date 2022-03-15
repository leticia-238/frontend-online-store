import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { addCart, getCart } from '../services/cartFunctions';

class ProductCard extends React.Component {
  constructor() {
    super();
    this.state = {
      hasQuantity: false,
      newAvailableQtd: 0,
    };
  }

  componentDidMount() {
    const { title, availableQtd } = this.props;
    this.getAvailableQuantity(title, availableQtd);
  }

  handleClick = () => {
    const { title, price, availableQtd, countItems } = this.props;
    addCart({ title, price, availableQtd });
    countItems();
    this.getAvailableQuantity(title, availableQtd);
  }

  getAvailableQuantity = (title, availableQtd) => {
    const productName = getCart().find((product) => (product[0] === title));
    if (productName) {
      this.setState({
        hasQuantity: availableQtd - productName[1].qtd < 1,
        newAvailableQtd: availableQtd - productName[1].qtd,
      });
    }
  }

  render() {
    const { title, price, thumbnail: image, id, shipping } = this.props;
    const { free_shipping: freeShipping } = shipping;
    const { hasQuantity, newAvailableQtd } = this.state;
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
          onClick={ this.handleClick }
          disabled={ hasQuantity }
        >
          Adicionar ao carrinho
        </button>
        <p>
          Quantidade disponível
          {newAvailableQtd}
        </p>
      </>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  countItems: PropTypes.func.isRequired,
  shipping: PropTypes.shape({
    free_shipping: PropTypes.bool,
  }).isRequired,
  availableQtd: PropTypes.number.isRequired,
};

export default ProductCard;
