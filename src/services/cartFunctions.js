if (!JSON.parse(localStorage.getItem('cartItems'))) {
  localStorage.setItem('cartItems', JSON.stringify([]));
}

export const addCart = (obj) => {
  const titlePrev = JSON.parse(localStorage.getItem('cartItems'));
  const item = titlePrev.find((product) => product.title === obj.title);
  if (item) {
    const index = titlePrev.indexOf(item);
    titlePrev.splice(index, 0, obj);
    localStorage.setItem('cartItems', JSON.stringify([...titlePrev]));
  } else {
    localStorage.setItem('cartItems', JSON.stringify([...titlePrev, obj]));
  }
};

export const removeCart = ({ title }) => {
  const titlePrev = JSON.parse(localStorage.getItem('cartItems'));
  const item = titlePrev.find((product) => product.title === title);
  const index = titlePrev.indexOf(item);
  titlePrev.splice(index, 1);
  localStorage.setItem('cartItems', JSON.stringify(titlePrev));
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
