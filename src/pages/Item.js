import React from 'react';
import PropTypes from 'prop-types';
import Coments from '../components/Coments';
import ButtonCart from '../components/buttonCart';
import { getProductFromId } from '../services/api';
import { addCart } from '../services/cartFunctions';

class Item extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      price: '',
    };
  }

  componentDidMount() {
    const { params: { id } } = this.props;
    getProductFromId(id).then(({ title, price }) => {
      this.setState({ title, price });
    });
  }

  handleClick = () => {
    const { title, price } = this.state;
    addCart({
      title,
      price,
    });
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <ButtonCart />
        <h3 data-testid="product-detail-name">
          { title }
        </h3>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ this.handleClick }
        >
          Adicionar ao carrinho
        </button>
        <Coments
          productTitle={ title }
        />
      </div>
    );
  }
}

Item.propTypes = {
  params: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Item;
