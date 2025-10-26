const checkPrice = (price) => {
  if (price.includes(".")) {
    const [front, back] = price.split(".");
    if (back.length >= 2) {
      return `${front}.${back}`;
    } else if (back.length === 1) {
      return `${front}.${back}5`;
    }
  }
  return `${price}.95`;
};

export default checkPrice
