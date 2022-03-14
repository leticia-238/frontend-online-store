if (!JSON.parse(localStorage.getItem('cartItems'))) {
  localStorage.setItem('cartItems', JSON.stringify([]));
}

export const addCart = (title) => {
  const titlePrev = JSON.parse(localStorage.getItem('cartItems'));
  localStorage.setItem('cartItems', JSON.stringify([...titlePrev, title]));
  return [...titlePrev, title];
};

export const removeCart = (title) => {
  const titlePrev = JSON.parse(localStorage.getItem('cartItems'));
  const item = titlePrev.find((product) => product.title === title);
  const index = titlePrev.indexOf(item);
  const newList = titlePrev.slice(index, index + 1);
  localStorage.setItem('cartItems', JSON.stringify(newList));
};

export const getCart = () => {
  const objeto = {};
  const productCart = JSON.parse(localStorage.getItem('cartItems'));
  productCart.forEach(({ title, price }) => {
    const qtd = productCart.filter((element) => element.title === title).length;
    objeto[title] = {
      price,
      qtd,
      totalPrice: qtd * price,
    };
  });
  const cart = Object.entries(objeto);
  return cart;
};
