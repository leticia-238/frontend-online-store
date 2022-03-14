import React from 'react';
import PropTypes from 'prop-types';
import { getProductFromId } from '../services/api';
import { addCart } from '../services/cartFunctions';
import ButtonCart from '../components/buttonCart';

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
    getProductFromId(id).then(({ title, price, ...rest }) => {
      console.log(rest);
      this.setState({ title, price, id });
    });
  }

  handleClick = () => {
    const { title, price, id } = this.state;
    addCart({ title, price, id });
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
      </div>
    );
  }
}

Item.propTypes = {
  params: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Item;
