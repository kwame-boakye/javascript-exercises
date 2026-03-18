const convertToCelsius = function(num1) {
  const celsius = (num1 - 32) * (5/9);
  return Math.round(celsius * 10) / 10;
};

const convertToFahrenheit = function(num1) {
  const fahrenheit = (num1 * (9/5)) + 32;
  return Math.round(fahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
