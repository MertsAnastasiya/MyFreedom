let array = [1, 1, 1, 1, 1, 1, 1];
console.log(
  array.map((item) => {
    console.log(this);
  })
);

let key = "name";
let users = [
  { name: "Ivan", age: 30 },
  { name: "Dasha", age: 25 },
];

console.log(users[0].name);
console.log(users[0][key]);
console.log(users[0]["name"]);

let user = {
  name: "Ivan",
  age: 30,
  info: {
    home: true,
    work: false,
  },
};
console.log(user);

let userDasha = { ...user, info: {...user.info}};

let userDasha = { 
    name: "Ivan",
    age: 30,
    info: {
        home: true,
        work: false,
    } 
};

userDasha.name = "Dasha";
user.age = 20;
user.info.home = false;

console.log(userDasha);
console.log(user);

userDasha.info.home = true;

console.log(userDasha);
console.log(user);




let array = [1, 2, 3]

let newArray = [1, 2, 3, [...array]];

array.push(1)

let newArrayDasha = [newArray];

newArrayDasha.push(2);
newArrayDasha[0].push(3);

console.log(newArray);

console.log(newArrayDasha);


let a = 5;

let b = a;

b= 6;

console.log(a);
console.log(b);



console.log(typeof {});
console.log(typeof []);





let userVlad = {
  name: "Vlad",
  age: 30,
  getInfo: () => `userName: ${this.name} userAge: ${this.age}`,
};

console.log(userVlad.getInfo());

let userSlava = {
  name: "Slava",
  age: 30,
  getInfo: () => {
    return `userName: ${userSlava.name} userAge: ${user.age}`;
  },
};

let array = [1, 2];
console.log(array.length);

array[100] = 10;
console.log(array.length);
console.log(array);

console.log(user.getInfo());

console.log("userName: " + user.name + " userAge: " + user.age);

console.log(Object);


let objectSlavik = {
    name: 'Slavik',
    age: 18
}

let objectIvan = {
    name: 'Ivan',
    age: 30,
    a: 1,
    b: 1,
    c: 1,
    g: 1,
    d: 1,
}

let {age, name} = objectSlavik



function growPerson({age, name, ...otherProps}){
    console.log(otherProps);

    age++;
    
    console.log(`${name} - ${age}`);

    age++;
    
    console.log(`${name} - ${age}`);

    age++;
    
    console.log(`${name} - ${age}`);
}

growPerson(objectSlavik)
growPerson(objectIvan)







