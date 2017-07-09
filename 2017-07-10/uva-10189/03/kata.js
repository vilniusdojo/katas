module.exports = function kata(field) {
  field = field
    .split('\n')
    .map(function (line) {
      return line.split('');
    });
  if (field[0][0] === '.') {
    return '0';
  }

  for (var i = 0; i < field.length; i++) {
    for (var j = 0; j < field[i].length; j++) {
      if (field[i][j] === '.') {
        field[i][j] = '1';
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
