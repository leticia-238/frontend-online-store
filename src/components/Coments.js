import React from 'react';
import PropTypes from 'prop-types';
import { addAvaliation, getAvaliation } from '../services/avaliations';

const ranking = ['1', '2', '3', '4', '5'];
class Coments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      rate: '',
      coment: '',
      avaliations: [],
    };
  }

  componentDidMount() {
    this.setState({
      avaliations: [...getAvaliation()],
    });
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
    this.setState({
      email: '',
      rate: '',
      coment: '',
      avaliations: [...getAvaliation()],
    });
  }

  render() {
    const { productTitle } = this.props;
    const { email, coment, rate, avaliations } = this.state;
    return (
      <>
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
            <p>Avalie o produto:</p>
            { ranking.map((element) => (
              <label
                htmlFor="rate"
                key={ element }
                value={ rate }
                onChange={ this.handleChage }
              >
                { element }
                <input
                  data-testid={ `${element}-rating` }
                  type="radio"
                  name="rate"
                  id={ element }
                  value={ element }
                />
              </label>
            )) }
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
        <div>
          { avaliations.filter(({ produto }) => produto === productTitle)
            .map((avaliation) => (
              <div key={ avaliations.indexOf(avaliation) }>
                <h2>{avaliation.email}</h2>
                <p>{avaliation.rate}</p>
                <p>{avaliation.coment}</p>
              </div>
            ))}
        </div>
      </>
    );
  }
}

Coments.propTypes = {
  productTitle: PropTypes.string.isRequired,
};

export default Coments;
