module.exports = function kata(field) {
  field = field
    .split('\n')
    .map(function (line) {
      return line.split('');
    });

  for (var i = 0; i < field.length; i++) {
    for (var j = 0; j < field[i].length; j++) {
      if (field[i][j] === '.') {
        var adjacent = 0;
        if (field[i][j - 1] === '*') {
          adjacent++;
        }
        if (field[i][j + 1] === '*') {
          adjacent++;
        }
        if (i > 0 && field[i - 1][j] === '*') {
          adjacent++;
        }
        if (i < (field.length - 1) && field[i + 1][j] === '*') {
          adjacent++;
        }
        field[i][j] = adjacent.toString();
      }
    }
  }

  field = field
    .map(function (line) {
      return line.join('');
    })
    .join('\n');
  
  return field;
};
