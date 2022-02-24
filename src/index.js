
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix || matrix.length === 0)
      return [];
  return matrix.map((x, i) => i % 2 === 0 ? x : x.reverse()).flat();
}
