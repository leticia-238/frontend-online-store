import React from 'react';
import PropTypes from 'prop-types';
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

  render() {
    const { categoriesList } = this.state;
    const { search } = this.props;
    return (
      <div className="categories-container">
        Categorias
        { categoriesList.map(({ id, name }) => (
          <label htmlFor={ id } key={ id } data-testid="category">
            <input
              type="radio"
              name="categories"
              id={ id }
              onChange={ () => {
                search(id);
              } }
              value={ id }
            />
            { name }
          </label>
        ))}
      </div>
    );
  }
}

CategoriesList.propTypes = {
  search: PropTypes.func.isRequired,
};

export default CategoriesList;
