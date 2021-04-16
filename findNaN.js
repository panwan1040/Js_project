function findNaN(number) {
  return number.findIndex(isNaN);
}
console.log(findNaN([1, 2, NaN, 3]));
console.log(findNaN([1, 2, 3, NaN, 3, 4, 5, 3]));
console.log(findNaN([1, 2, 3, 4, 5]));
console.log(findNaN([NaN, 2, 3, 4]));
console.log(findNaN([1, 2, 3]));
