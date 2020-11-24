let array = [
  ["Dasha", "Sergey"],
  ["lesson1", "lesson2", "lesson3"],
];

let [names, lessons] = array;

console.log(names, lessons);

let newArray = ["Dasha", "Sergey"];

let nameStudet = newArray.shift();

newArray.push("Slava");

console.log(nameStudet);

let obj = new Object({
  nameClass: [1, 2, 3],
  item1: 1,
  item2: 2,
  item3: 3,
  item4: 4,
  item5: {
    value: 1,
  },
});

let obj1 = new Object({
  nameClass: [1, 2, 3],
  item1: 1,
  item2: 2,
  item3: 4,
  item4: 5,
  item5: {
    value: 1,
  },
});

let obj2 = new Object({
  nameClass: [1, 2, 3],
  item6: 1,
  item7: 2,
  item8: 3,
  item9: 4,
  item50: {
    value: 1,
  },
});

let newObj = Object.assign({}, obj);
newObj.item1 = 2;

console.log(obj);

let arrayKeys = Object.keys(obj);
let arrayValues = Object.values(obj);

console.log("keys", arrayKeys);
console.log("values", arrayValues);

// let {
//   item0,
//   item2,
//   nameClass = [],
//   item5: { name = "Ivan" },
// } = obj;

// nameClass.push(5)
// console.log(nameClass);

function getObject(object) {
  let { name = "Dasha", nameClass } = object;
  nameClass.push(1);
  console.log(name);
  console.log(nameClass);
}

getObject(obj);
