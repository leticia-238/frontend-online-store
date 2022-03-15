import React from 'react';
import PropTypes from 'prop-types';
import FormComents from '../components/FormComents';
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

    getProductFromId(id).then(({ title, price, ...rest }) => {
      console.log(rest);
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
        <FormComents
          productTitle={ title }
        />
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
