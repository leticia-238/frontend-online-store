if (!JSON.parse(localStorage.getItem('cartItems'))) {
  localStorage.setItem('cartItems', JSON.stringify([]));
}

export const addCart = (title) => {
  const titlePrev = JSON.parse(localStorage.getItem('cartItems'));
  localStorage.setItem('cartItems', JSON.stringify([...titlePrev, title]));
};

export const getCart = () => {
  const titlePrev = JSON.parse(localStorage.getItem('cartItems'));
  return titlePrev;
};
