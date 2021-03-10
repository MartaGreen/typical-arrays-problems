
exports.min = function min (array) {
  if (!array || array == undefined) return 0;
  min_num = array[i];
  for (let i = 0; i < array.length; i++) {
    if (min_num > array[i]) min_num = array[i];
  };
  return min_num;
}

exports.max = function max (array) {
  return 0;
}

exports.avg = function avg (array) {
  return 0;
}
