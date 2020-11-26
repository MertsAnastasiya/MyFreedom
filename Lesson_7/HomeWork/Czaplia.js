//1. Создайте объект с днями недели. Ключами в нем должны служить номера дней от начала недели (понедельник - первый и т.д.). Пусть номер дня недели хранится в переменной day, например там лежит число . Выведите день недели, соответствующий значению переменной day.

let week = {
    1: "monday",
    2: "tuesday", 
    3: "wednesday", 
    4: "thursday", 
    5: "friday", 
    6: "saturday", 
    7: "sunday"
 }

let day = 3; 


console.log(week[day]); 

//2. Дан объект {js:['jQuery', 'Angular'], php: 'hello', css: 'world'}. Выведите с его помощью слово 'jQuery'

let obj = {
    js:['jQuery', 'Angular'], 
    php: 'hello', 
    css: 'world'
}

let {js} = obj; 
console.log(js[0]);

//3. Создайте массив d4 с числовыми величинами 45,78,10,3. Напишите функцию сортировки my(a,b), которая при вызове d4.sort(my) отсортирует элементы массива по убыванию чисел. Вызовите d4.sort(my)
 
d4 = [45, 78, 10, 3]; 

function my(a,b) {
    return b - a; 
}

console.log(d4.sort(my));