// 1.В примерах ниже производятся различные действия с prototype.

// 1.1.  Каковы будут результаты выполнения? Почему?
// function Rabbit() { }
// Rabbit.prototype = { eats: true };
// var rabbit = new Rabbit();
// Rabbit.prototype = {};
// alert(rabbit.eats);

//Ответ: Результатом выполнения будет 'true'. Потому что мы присваиваем объекту 'rabbit'  значением функцию-конструктор 'new Rabbit()'
//А эта функция создаёт объект __proto__ со ссылкой на свойство 'prototype' функции-конструктора.
//А в этом свойстве у нас указано значение { eats: true }.
//Поэтому, при выводе объекта 'rabbit' со свойством 'eats', браузер будет искать это свойство сначала в самом объекте, а затем в свойствах его прототипа. И найдёт, потому что оно там есть.



// 1.2. А если код будет такой? (заменена одна строка):
// function Rabbit(name) { }
// Rabbit.prototype = { eats: true };
// var rabbit = new Rabbit();
// Rabbit.prototype.eats = false; // (*)
// alert(rabbit.eats);

//Ответ: Результатом выполнения будет 'false'. Потому что мы изменили значение свойства 'eats' на 'false'.
//А поскольку код читается сверху вниз, то последнее значение перезапишет предыдущее.


//1.3. А такой? (заменена одна строка)
// function Rabbit(name) { }
// Rabbit.prototype = { eats: true };
// var rabbit = new Rabbit();
// delete Rabbit.prototype.eats; // (*)
// alert(rabbit.eats);

//Ответ: Результатом выполнения будет 'undefined'. Потому что мы удалили свойство 'eats' из прототипа объекта.
//А поскольку его больше нет, то и значение будет неопределённое.



// 1.4. А если бы в последнем коде вместо строки (*) было delete rabbit.eats?

//Ответ: Результатом выполнения будет 'true'. Потому что мы удалили из свойство не из прототипа объекта, а из самого объекта 'rabbit'.
//А в этом объекте такого свойства не было изначально. 



// 2.  Есть объекты:

// var head = {
//   glasses: 1
// };
// var table = {
//   pen: 3
// };
// var bed = {
//   sheet: 1,
//   pillow: 2
// };
// var pockets = {
//   money: 2000
// };

// Задание состоит из двух частей:

// 2.1. Присвойте объектам ссылки __proto__ так, чтобы любой поиск чего-либо шёл по алгоритму pockets > bed > table > head. То есть pockets.pen == 3, bed.glasses == 1, но table.money == undefined.

//Ответ:

pockets.__proto__ = bed;
bed.__proto__ = table;
table.__proto__ = head;

// 2.2.После этого ответьте на вопрос, как быстрее искать glasses: обращением к pockets.glasses или head.glasses? Попробуйте протестировать.

//Ответ: На сколько я понял, время поиска одинаковое...