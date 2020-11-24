let array = [0, 1, 2];
let a = array.splice(1, 1);
console.log(array);
console.log(a);


console.log([1,2,3].reduce((acc, item) => {(acc = acc+1)}, 1));
console.log(undefined +1);

array.reduce(func, newArray);
func(newArray, item);
let array = [1, 2, 3];
console.log([1, 2, 3, ...array, ...array]);

function spred(...newArray) {
  console.log(newArray);
}
spred(1, "2", [1, 2, 3]);

function getNewArray(a, b, ...newArray) {
  console.log(a, b);
  console.log(newArray);
}

getNewArray(1, 2, 3, 5, 23, 222);

//1 итерация   1
//2 итерация   3
//3 итерация   7

console.log(Boolean([]));

console.log(0 || 0 || 0);

console.log(12 && 10 && 1);

console.log([1, 2, 1, 1].find((item) => item === 1));
console.log([1, 2, 1, 1].filter((item) => item === 1));

console.log([1, 2, 2, 2].some((item) => item === 1));
console.log([1, 2, 1, 1].every((item) => item === 1));

if ([1, 2, 0, 1].find((item) => item === 0)) {
  console.log("1");
}

console.log(
  [1, 2, 1, 1].map((item) => {
    item + 2;
  })
);

let newFunction = function namedFunction() {
  return 1;
};

let anonFunction = function () {
  return 1;
};

let arrowFunctionReturn = () => {
  let array = [];
  array.push(1);
  return 2;
};

let arrowFunction = function () {
  return newFunction();;
};

let arrowFunction = (item) =>  {return newFunction()};
anonFunction();

arrowFunction(2);
