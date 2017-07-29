module.exports = {
  houses: function houses(steps) {
    var location = [0, 0];
    var houses = [location[0] + '-' + location[1]];
    steps.split('').forEach(function (step) {
      if (step === '<') {
        location[0] -= 1;
      }
      if (step === '>') {
        location[0] += 1;
      }
      if (step === '^') {
        location[1] += 1;
      }
      if (step === 'v') {
        location[1] -= 1;
      }
      var house = location[0] + '-' + location[1];
      if (houses.indexOf(house) < 0) {
        houses.push(house);
      }
    });
    return houses;
  },
  housesByTwoSantas: function santas(steps) {
    return ['0-0'];
  }
};
