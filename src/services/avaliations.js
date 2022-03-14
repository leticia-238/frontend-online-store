if (!JSON.parse(localStorage.getItem('avaliation'))) {
  localStorage.setItem('avaliation', JSON.stringify([]));
}

export const addAvaliation = (obj) => {
  const titlePrev = JSON.parse(localStorage.getItem('avaliation'));
  localStorage.setItem('avaliation', JSON.stringify([...titlePrev, obj]));
};

export const getAvaliation = () => {
  const productAvaliation = [];
  JSON.parse(localStorage.getItem('avaliation'))
    .forEach(({ produto }) => {
      productAvaliation[produto] = {
        nome: 'andre',
      };
    });
  console.log(productAvaliation);
};
