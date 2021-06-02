export const NumberFormat = (number) => {
  return new Intl.NumberFormat("de-DE", {
    maximumSignificantDigits: 3,
    minimumIntegerDigits: 3,
  }).format(number);
};
