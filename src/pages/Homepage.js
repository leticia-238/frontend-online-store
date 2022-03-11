import React from 'react';
import ButtonCart from '../components/buttonCart';
import CategoriesList from '../components/categoriesList';
import ProductCard from '../components/ProductCard';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Homepages extends React.Component {
  constructor() {
    super();
    this.state = {
      inputName: '',
      List: [],
    };
  }

  handleChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [target.name]: value,
    });
  }

  Search = async () => {
    const { inputValue } = this.state;
    const request = await getProductsFromCategoryAndQuery('', inputValue);
    this.setState({
      List: request.results,
    });
  }

  render() {
    const { inputName, List } = this.state;
    return (
      <div className="homepage">
        <header className="homepage-header">
          <div className="search-box">
            <input
              data-testid="query-input"
              type="text"
              name="inputName"
              onChange={ this.handleChange }
              value={ inputName }
              className="input-field"
            />
            <button
              data-testid="query-button"
              type="button"
              onClick={ this.Search }
              className="btn"
            >
              Pesquisar
            </button>
          </div>
          <ButtonCart />
        </header>
        <aside>
          <CategoriesList
            onChange={ this.handleChange }
          />
        </aside>
        <main>
          <h1 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h1>
          { List.map(({ id, title, price, thumbnail }) => (
            <ProductCard
              key={ id }
              title={ title }
              price={ price }
              image={ thumbnail }
            />
          )) }
        </main>
      </div>
    );
  }
}

export default Homepages;
