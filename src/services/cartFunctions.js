if (!JSON.parse(localStorage.getItem('cartItems'))) {
  localStorage.setItem('cartItems', JSON.stringify([]));
}

export const addCart = (title) => {
  const titlePrev = JSON.parse(localStorage.getItem('cartItems'));
  localStorage.setItem('cartItems', JSON.stringify([...titlePrev, title]));
};

export const getCart = () => {
  const objeto = [];
  const titlePrev = JSON.parse(localStorage.getItem('cartItems'));
  titlePrev.forEach(({ produto, preco }) => { objeto[produto] = { price: preco }; });
  console.log(objeto);
  return objeto;
};
