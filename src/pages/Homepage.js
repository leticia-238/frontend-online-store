import React from 'react';
import ButtonCart from '../components/buttonCart';

class Homepages extends React.Component {
  render() {
    return (
      <>
        <ButtonCart />
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
      </>
    );
  }
}

export default Homepages;
