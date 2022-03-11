import React from 'react';
import ButtonCart from '../components/buttonCart';
import CategoriesList from '../components/categoriesList';
import ProductCard from '../components/ProductCard';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Homepages extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      List: [],
    };
  }

  handleChange = ({ target }) => {
    this.setState({
      inputValue: target.value,
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
    const { inputValue, List } = this.state;
    return (
      <>
        <CategoriesList />
        <ButtonCart />
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
        <input
          data-testid="query-input"
          type="text"
          name="inputName"
          onChange={ this.handleChange }
          value={ inputValue }
        />
        <button
          data-testid="query-button"
          type="button"
          onClick={ this.Search }
        >
          Pesquisar
        </button>
        { List.map(({ id, title, price, thumbnail }) => (
          <ProductCard
            key={ id }
            title={ title }
            price={ price }
            image={ thumbnail }
          />
        )) }
      </>
    );
  }
}

export default Homepages;
