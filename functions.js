// 1

console.log("exercise 1");
function isEven(number) {
	return number % 2 === 0 ? true : false;
}
console.log(isEven(5));

// 2
console.log("exercise 2");
function fizzBuzz(number) {
	if (number % 3 === 0) {
		console.log("Fizz");
	}
	if (number % 5 === 0) {
		console.log("Buzz");
	}
	if (number % 15 === 0) {
		console.log("FizzBuzz");
	}
}

fizzBuzz(15);

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

/*11. Напишите функции lastN(array, count), которая возвращает count последних элементов массива.
Если count больше длины массива, возвращается копия всего массива.
Если array - пустой массив или count равен 0, функция возвращает пустой массив.
Примеры:
lastN([1, 2, 3], 2) // возвращает [2, 3]
lastN([1, 2, 3], 10) // возвращает [1, 2, 3]
lastN([], 3) // возвращает []
lastN([1, 2, 3], 0) // возвращает []*/

function lastN(array, count) {
	if (!Array.isArray(array) || array.length === 0 || count === 0) return [];
	if (array.length > count) return array.slice(0, count);
	return [...array];
}

console.log(lastN([2, 2, 3, 6, 8, 9, 3, 10], 2));

/*12. Напишите функцию join(array, space), которая возвращает строку, в которой все элементы массива отделены друг от друга строкой, задана аргументом space.
Примеры:
join([1, 2, 3], ',') // возвращает "1,2,3"
join([1, 2, 3], '') // возвращает "123"
join([1, 2, 3], 'baz') // возвращает "1baz2baz3"*/

function join(array, space) {
	let newString = "";
	for (let i = 0; i < array.length; i++) {
		if (i != array.length - 1) {
			newString += array[i] + space;
		} else {
			newString += array[i];
		}
	}

	//return array.join(space);
	return newString;
}

console.log(join([1, 2, 3], "baz"));

/*13. Напишите функцию contains(array, element), которая возвращает true только в том случае, если массив содержит элемент element.
Примеры:
contains([1, 2, 3], 3) // возвращает true
contains(['a', 'b', 'c'], 'd') // возвращает false*/

function contains(array, element) {
	//return (array.includes(element)) ? true : false;
	for (let i = 0; i < array.length; i++) {
		if (array[i] == element) {
			return true;
		}
	}
	return false;
}

console.log(contains([1, 2, 3], 3));

/*14. Напишите функцию pluck(array, propertyName), которая принимает на вход массив объектов array и возвращает массив из свойств с именем, заданным переменной propertyName в каждом объекте.
Пример:
var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}, {name: 'bill'}];
pluck(stooges, 'age')// возвращает [40, 50, 60, undefined]*/

function pluck(array, propertyName) {
	let propertiesArray = [];
	for (let i = 0; i < array.length; i++) {
		propertiesArray.push(array[i][propertyName]);
	}
	return propertiesArray;
}
var stooges = [
	{ name: "moe", age: 40 },
	{ name: "larry", age: 50 },
	{ name: "curly", age: 60 },
	{ name: "bill" },
];
console.log(pluck(stooges, "name"));

/*15. Напишите функцию flatten(array), которая принимает на вход массив из массивом и возвращает массив, в котором сначала идут все элементы первого массива, затем второго, затем третьего и т.д.
Примеры:
flatten([[1, 2, 3], [4, 5, 6], [7, 8, 9]) // возвращает [1, 2, 3, 4, 5, 6, 7, 8, 9]
flatten([['a'], [], ['b', 'c']]) // возвращает ['a', 'b', 'c']*/

function flatten(array) {
	let newArray = [];
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array[i].length; j++) {
			newArray.push(array[i][j]);
		}
	}
	return newArray;
}

console.log(flatten([["a"], [], ["b", "c"]]));
