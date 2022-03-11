import React from 'react';
import { getCategories } from '../services/api';

class CategoriesList extends React.Component {
  constructor() {
    super();
    this.state = {
      categoriesList: [],
    };
  }

  componentDidMount() {
    getCategories().then((categories) => {
      this.setState({ categoriesList: categories });
    });
  }

  handleInput = ({ target: { name, checked } }) => {
    this.setState({ [name]: checked });
  }

  render() {
    const { categoriesList, ...rest } = this.state;
    return (
      <div className="categories-container">
        Categorias
        { categoriesList.map(({ id, name }) => (
          <label htmlFor={ id } key={ id } data-testid="category">
            <input
              type="radio"
              name="categories"
              id={ id }
              checked={ rest[name] }
              onChange={ this.handleInput }
              value={ name }
            />
            { name }
          </label>
        ))}
      </div>
    );
  }
}

export default CategoriesList;
