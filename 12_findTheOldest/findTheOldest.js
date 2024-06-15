const findTheOldest = function (arr) {
  function getAge(birthYear, deathYear) {
    if (!deathYear) {
      deathYear = new Date().getFullYear();
    }
    return deathYear - birthYear;
  }

  let newArray = arr.map((arr) => getAge(arr.yearOfBirth, arr.yearOfDeath));

  let oldest = 0;
  for (let i = 1; i < newArray.length; i++) {
    if (newArray[oldest] < newArray[i]) {
      oldest = i;
    }
  }
  return arr[oldest];
};

// Do not edit below this line
module.exports = findTheOldest;
