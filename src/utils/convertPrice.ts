export const insertCommas = (prices: number[]) => {
  return prices.map((price) =>
    price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  );
};
