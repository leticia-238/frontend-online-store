if (!JSON.parse(localStorage.getItem('avaliation'))) {
  localStorage.setItem('avaliation', JSON.stringify([]));
}

export const addAvaliation = (obj) => {
  const titlePrev = JSON.parse(localStorage.getItem('avaliation'));
  localStorage.setItem('avaliation', JSON.stringify([...titlePrev, obj]));
};

export const getAvaliation = () => {
  const Avaliation = JSON.parse(localStorage.getItem('avaliation'));
  return Avaliation;
};
