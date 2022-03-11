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
      <div>
        Categorias
        <label htmlFor="categories">
          { categoriesList.map(({ id, name }) => (
            <div key={ id } data-testid="category">
              { name }
              <input
                type="radio"
                name="categories"
                id={ name }
                checked={ rest[name] }
                onChange={ this.handleInput }
              />
            </div>
          ))}
        </label>
      </div>
    );
  }
}

export default CategoriesList;
