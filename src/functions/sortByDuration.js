export const sortByDuration = (a, b) => {
  let numA = parseInt(a.Runtime);
  let numB = parseInt(b.Runtime);

  return numA - numB;
};
