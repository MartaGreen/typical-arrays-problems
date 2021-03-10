
exports.min = function min (array) {
  if (typeof array == "undefined" || !array.length ) return 0;
  min_num = array[0];
  for (let i = 1; i < array.length; i++) {
    if (min_num > array[i]) min_num = array[i];
  };
  return min_num;
}

exports.max = function max (array) {
  if (typeof array == "undefined" || !array.length ) return 0;
  max_num = 0;
  for (let i = 0; i < array.length; i++) {
    if (max_num < array[i]) max_num = array[i];
  }
  return max_num;
}

exports.avg = function avg (array) {
  if (typeof array == "undefined" || !array.length ) return 0;
  sum_num = 0;
  for (let i = 0; i < array.length; i++) sum_num += array[i]
  return (sum_num/array.length)
}
