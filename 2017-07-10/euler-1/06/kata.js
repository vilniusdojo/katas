module.exports = function kata(n, d) {
  var sum = 0;
  for (var i = 1; i < n; i++) {
    for (var j = 0; j < d.length; j++) {
      if (i % d[j] === 0) {
        sum += i;
        break;
      }
    }
  }
  return sum;
};
