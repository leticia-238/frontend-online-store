import React from 'react';
import PropTypes from 'prop-types';
import { addAvaliation, getAvaliation } from '../services/avaliations';

// const ranking = ['1', '2', '3', '4', '5'];
class FormComents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      rate: '5',
      coment: '',
    };
  }

  componentDidMount() {
    getAvaliation();
  }

  handleChage = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  }

  handleClick = (title) => {
    const { email, coment, rate } = this.state;
    console.log(title);
    addAvaliation({
      produto: title,
      email,
      coment,
      rate,
    });
  }

  render() {
    const { productTitle } = this.props;
    const { email, coment, rate } = this.state;
    return (
      <form>
        <label htmlFor="email">
          <input
            data-testid="product-detail-email"
            name="email"
            type="email"
            id="email"
            placeholder="exemplo@email.com"
            value={ email }
            onChange={ this.handleChage }
          />
        </label>

        <div className="rate-container">
          <label htmlFor="rate">
            <select id="rate" name="rate" onChange={ this.handleChage } value={ rate }>
              <option data-testid="1-rating" value="1">1</option>
              <option data-testid="2-rating" value="2">2</option>
              <option data-testid="3-rating" value="3">3</option>
              <option data-testid="4-rating" value="4">4</option>
              <option data-testid="5-rating" value="5">5</option>
            </select>
          </label>
        </div>

        <label htmlFor="coment">
          <textarea
            data-testid="product-detail-evaluation"
            name="coment"
            id="coment"
            placeholder="Exemplo"
            value={ coment }
            onChange={ this.handleChage }
          />
        </label>

        <button
          data-testid="submit-review-btn"
          type="button"
          onClick={ () => this.handleClick(productTitle) }
        >
          Avaliar
        </button>
      </form>
    );
  }
}

FormComents.propTypes = {
  productTitle: PropTypes.string.isRequired,
};

export default FormComents;
