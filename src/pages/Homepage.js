import React from 'react';
import ButtonCart from '../components/buttonCart';
import CategoriesList from '../components/categoriesList';
import ProductCard from '../components/ProductCard';
import { getProductsFromCategoryAndQuery } from '../services/api';
import { getCart } from '../services/cartFunctions';

class Homepages extends React.Component {
  constructor() {
    super();
    this.state = {
      inputName: '',
      List: [],
      items: getCart().reduce((total, item) => (total + item[1].qtd), 0),
    };
  }

  cartItemsCounter = () => {
    const totalItems = getCart().reduce((total, item) => (total + item[1].qtd), 0);
    this.setState({ items: totalItems });
  };

  handleChange = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  Search = async (id) => {
    const { inputName } = this.state;
    const request = await getProductsFromCategoryAndQuery(id, inputName);
    this.setState({
      List: request.results,
      inputName: '',
    });
  }

  render() {
    const { inputName, List, items } = this.state;
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
          <ButtonCart items={ items } />
        </header>
        <aside>
          <CategoriesList
            handleInput={ this.handleChange }
            search={ this.Search }
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
              id={ id }
              countItems={ this.cartItemsCounter }
            />
          )) }
        </main>
      </div>
    );
  }
}

export default Homepages;
