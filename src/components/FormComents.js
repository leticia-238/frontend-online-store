import React from 'react';

const ranking = ['1', '2', '3', '4', '5'];
class FormComents extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="email">
          <input
            data-testid="product-detail-email"
            type="email"
            id="email"
            placeholder="exemplo@email.com"
          />
        </label>

        <div className="rate-container">
          <label htmlFor="rate">
            <select id="rate">
              { ranking.map((number) => (
                <option
                  key={ number }
                  data-testid={ `${number}-rating` }
                  value={ number }
                >
                  {number}
                </option>
              )) }
            </select>
          </label>
        </div>

        <label htmlFor="coment">
          <textarea
            data-testid="product-detail-evaluation"
            id="coment"
            placeholder="Exemplo"
          />
        </label>

        <button
          data-testid="submit-review-btn"
          type="button"
        >
          Avaliar
        </button>
      </form>
    );
  }
}

export default FormComents;
