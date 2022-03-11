import React from 'react';
import PropTypes from 'prop-types';
import { getProductFromId } from '../services/api';

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

  render() {
    const { productInfo } = this.state;
    return (
      <div>
        <h3 data-testid="product-detail-name">
          {productInfo.title }
        </h3>
      </div>
    );
  }
}

Item.propTypes = {
  id: PropTypes.string.isRequired,
  params: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Item;
