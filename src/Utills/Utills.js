export const getAlphabetsInRange = function (AlphabetsArray, range) {
  let alphabetsInrange = [];
  for (let index = 0; index < range; index++) {
    alphabetsInrange[index] = AlphabetsArray[index];
  }
  return alphabetsInrange;
};

export const convertObjectToArrayOfObjects = function (object) {
  let optionsArray = [];
  for (let property in object) {
    optionsArray.push({ name: property, value: object[property] });
  }
  return optionsArray;
};

export const pickRandomElementFromArray = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};
