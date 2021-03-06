const groupBy = function (xs, key) {
  return xs.reduce(function (rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

const sum = function (productArray, column) {
  return productArray.reduce((total, product) => {
      return total + product[column]
  }, 0);
}
module.exports = { groupBy, sum }