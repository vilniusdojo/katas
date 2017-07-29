function pushUnique(array, item) {
  if (array.indexOf(item) < 0) {
    array.push(item);
  }
}

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
      pushUnique(houses, location[0] + '-' + location[1]);
    });
    return houses;
  },

  housesByTwoSantas: function santas(steps) {
    var santa = [];
    var roboSanta = [];

    steps.split('')
      .forEach(function (step, index) {
        (index % 2 ? roboSanta : santa).push(step);
      });

    var houses = this.houses(santa.join(''));

    this.houses(roboSanta.join(''))
      .forEach(pushUnique.bind(null, houses));

    return houses;
  }
};
