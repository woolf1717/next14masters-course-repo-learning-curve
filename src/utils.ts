export const formatMoney = (amount: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
};

export const formatRating = (rating: number | null | undefined) => {
  if (rating === null || rating === undefined) {
    return "Brak oceny";
  } else {
    return rating.toFixed();
  }
};
