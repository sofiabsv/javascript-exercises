const palindromes = function (str) {
  const alphanum = "abcdefghijklmnopqrstuvwxyz0123456789";

  const newString = str
    .toLowerCase()
    .split("")
    .filter((item) => alphanum.includes(item))
    .join("");

  const reversedString = newString.split("").reverse().join("");

  return reversedString === newString;
};

// Do not edit below this line
module.exports = palindromes;
