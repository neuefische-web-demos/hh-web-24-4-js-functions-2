console.log("hi");

// Return Statement

function add3Numbers(number1, number2, number3) {
  const sum = number1 + number2 + number3;
  return sum;
}

const firstSum = add3Numbers(2, 10, 5);

// A function can only return one expression value, but it can have multiple return statements
// Early return statement: The execution of a function ends immediately once a return statement is reached.

function checkStringLength(string) {
  if (string.length > 3) {
    return true;
    console.log("never logged");
  } else {
    return false;
    console.log("also never logged");
  }
}

// Arrow Function Expressions

const addNumbers = (first, second) => {
  const sum = first + second;
  return sum;
};

// Arrow Function Shorthand Notation

const addOne = (number) => number + 1;
const addTwoNumbers = (first, second) => first + second;
