const fibonacci = function (count) {
  if (count < 0) {
    return "OOPS";
  } else if (count == 0) {
    return 0;
  }
  let first = 1;
  let second = 0;

  for (let i = 2; i <= count; i++) {
    let newElement = first + second;
    second = first;
    first = newElement;
  }
  return first;
};

// Do not edit below this line
module.exports = fibonacci;
