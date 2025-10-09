const intel = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const priceConverter = (price) => intel.format(price);

export default function useCurrency(price) {
  return priceConverter(price);
}
