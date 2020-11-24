// 1

console.log("exercise 1");
function isEven(number) {
  function fizzBuzz(number) {
    number % 3 === 0 && console.log("Fizz");
    number % 5 === 0 && console.log("Buzz");
    number % 15 === 0 && console.log("FizzBuzz");
  }
  fizzBuzz(15);

  return !!(number % 2 === 0);
}
console.log(isEven(5));
fizzBuzz(15);
// 2
// console.log("exercise 2");
// function fizzBuzz(number) {
//   number % 3 === 0 && console.log("Fizz");
//   number % 5 === 0 && console.log("Buzz");
//   number % 15 === 0 && console.log("FizzBuzz");
// }
// fizzBuzz(15);

//3
console.log("exercise 3");
function loop(start, end, step) {
  for (let i = start; i <= end; i = i + step) {
    console.log(i);
  }
}
loop(-10, 3, 4);

// 4
console.log("exercise 4");
function factorial(number) {
  return number > 1 ? number * factorial(number - 1) : 1;
}
console.log(factorial(3));

// 5
console.log("exercise 5");
// const clone = (array) => [...array]
function clone(array) {
  return [...array];
}

let startArray = [1, 2, 3];
let newArray = clone(startArray);
newArray[0]++;
console.log(startArray);
console.log(newArray);

// 6
console.log("exercise 6");
function first(array) {
  return Array.isArray(array) && array.length !== 0 ? array[0] : undefined;
}
console.log(first(null));

// 7
console.log("exercise 7");
function first(array) {
  let n = Array.isArray(array) && array.length != 0 ? array.length : null;
  return n > 0 ? array[n - 1] : undefined;
}
console.log(first([5, 2, 9]));

// 8
console.log("exercise 8");
function range(start, end, step) {
  let array = [];
  for (let i = start; i <= end; i += step) {
    array.push(i);
  }
  return array;
}
console.log(range(2, 10, 3));

// 9
console.log("exercise 9");
function max(array) {
  if (!Array.isArray(array) || array.length === 0) return undefined;
  return Math.max(...array);
}

console.log(max([2, 6, 10, 4, 0, 3]));

// 10
console.log("exercise 10");

function firstN(array, count) {
  if (!Array.isArray(array) || array.length === 0) return [];
  if (array.length > count) return array.slice(0, count);
  return [...array];
}

console.log(firstN([1, 2, 3, 4, 5, 43, 2], 3));

// 11
console.log("exercise 11");
function lastN(array, count) {
  if (!Array.isArray(array) || array.length === 0 || count === 0) return [];
  if (array.length > count) return array.slice(array.length - count);
  return [...array];
}
console.log(lastN([2, 2, 3, 6, 8, 9, 3, 10], 0));

//12
console.log("exercise 12");
function join(array, space) {
  return array.join(space);
}
console.log(join([1, 2, 3], "baz"));

// 13
console.log("exercise 13");
function contains(array, element) {
  return array.includes(element);
}
console.log(contains([1, 2, 3], 3));

// 14
console.log("exercise 14");
function pluck(array, propertyName) {
  return array.map((item) => item[propertyName]);
}
var stooges = [
  { name: "moe", age: 40 },
  { name: "larry", age: 50 },
  { name: "curly", age: 60 },
  { name: "bill" },
];
console.log(pluck(stooges, "name"));

//15
console.log("exercise 15");

function flatten(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return array.reduce((acc, item) => {(acc = acc.push(item))}, []);
}
console.log(flatten([["a"], [], ["b", "c"]]));

