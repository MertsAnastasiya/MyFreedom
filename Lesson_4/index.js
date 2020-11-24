//Декларация

// showMessege = function()
// func = undefined 18 (function)

//Выполнение нашего кода

// num = 20

// Лексическое окружение - коробка Global

console.log(showMessege());

var num = 20;

function showMessege() {
  console.log(num);
  if (num) {
    return 3;
  }
}
var func = function showMessege() {
  console.log(num);
  return 2;
};

num = func();

console.log(showMessege());

console.log(num);
