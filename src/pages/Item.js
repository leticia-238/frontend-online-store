import React from 'react';
import PropTypes from 'prop-types';
import { getProductFromId } from '../services/api';
import { addCart } from '../services/cartFunctions';
import ButtonCart from '../components/buttonCart';

class Item extends React.Component {
  constructor() {
    super();
    this.state = {
      productInfo: [],
    };
  }

  componentDidMount() {
    const { params: { id } } = this.props;
    getProductFromId(id).then((response) => {
      console.log(response);
      this.setState({ productInfo: response });
    });
  }

  handleClick = () => {
    const { productInfo } = this.state;
    addCart(productInfo.title);
  }

  render() {
    const { productInfo } = this.state;
    return (
      <div>
        <ButtonCart />
        <h3 data-testid="product-detail-name">
          { productInfo.title }
        </h3>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ this.handleClick }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

Item.propTypes = {
  id: PropTypes.string.isRequired,
  params: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Item;