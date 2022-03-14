if (!JSON.parse(localStorage.getItem('cartItems'))) {
  localStorage.setItem('cartItems', JSON.stringify([]));
}

export const addCart = (title) => {
  const titlePrev = JSON.parse(localStorage.getItem('cartItems'));
  localStorage.setItem('cartItems', JSON.stringify([...titlePrev, title]));
};

export const getCart = () => {
  const objeto = {};
  const productCart = JSON.parse(localStorage.getItem('cartItems'));
  productCart.forEach(({ produto, preco }) => {
    const qtd = productCart.filter((element) => element.produto === produto).length;
    objeto[produto] = {
      price: preco,
      qtd,
      totalPrice: qtd * preco,
    };
  });
  const cart = Object.entries(objeto);
  return cart;
};
