import React from 'react';
import ButtonCart from '../components/buttonCart';
import CategoriesList from '../components/categoriesList';

class Homepages extends React.Component {
  render() {
    return (
      <>
        <CategoriesList />
        <ButtonCart />
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
      </>
    );
  }
}

export default Homepages;
