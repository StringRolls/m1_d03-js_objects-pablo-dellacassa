// Class code examples

/* 

An object is relationship, a collection, a record, which has properties 

Object express relationships, array express order

Objects protect with curly brackets variables with lables and values

*/

const person1 = {
  // person 1 is an instantiation of an object
  firstName: "Chee Kean",
  weight: 231,
  height: 1.7,
};

const person2 = {
  firstName: "Marco Santo",
  weight: 231,
  height: 1.7,
};

const person3 = {
  firstName: "Carlitro",
  weight: 231,
  height: 1.7,
};

const person4 = {
  firstName: "Caroluna",
  weight: 231,
  height: 1.7,
  address: {
    street: "Carrer de Pamplona",
    number: "96",
    planta: "PB",
    piso: "1º",
  },
};

// Accessing a property with dot notation
console.log(
  "Info about Caroluna",
  person4.firstName,
  person4.weight,
  person4.address.piso,
  "\n"
);

// Accessing a property with bracket notation or arrays (indirect access, or dynamic)

// A generic obj could be access with dot notation too (static, accept values)

console.log(person1["weight"]);

const personKey = ["firstName", "weight", "height"];
const personAddressKey = ["street", "number", "planta", "piso"];

console.log("_____________________");
for (const key of personKey) {
  console.log(`person4 ${key}: `, person4[key]);
}

for (const key of personAddressKey) {
  console.log(`person4 ${key}: `, person4.address[key]);
}
console.log("_____________________");
console.log("All the objects properties: ", Object.keys(person1));
console.log("_____________________");

const allTheKeys = Object.keys(person4);
console.log("The keys array: ", allTheKeys);

for (const oneKey of Object.keys(person1)) {
  console.log(`A key from person1 ${oneKey}: `, person1[oneKey]);
}
console.log("_____________________");

person1.nationality = "Italian";

console.log(person1.favFood);

person1["favFood"] = "pizza";

const newKey = `favourite book`;
person1[newKey] = "guide to galaxy";

console.log("person1: ", person1);

for (key in person1) console.log(person1[key]);

// Object.keys(person1)

/* 
The Object.keys() method returns an array of a given 
object's own enumerable property names, iterated in the 
same order that a normal loop would. 
*/

for (key of Object.keys(person1)) console.log(person1[key]);

console.log("accessing a number", person1[1087643]);

console.log("reading index from keys", Object.keys(person1)[1]);

// Objects don't have lenght but the dot notation will look for the label "lenght"
console.log("object lenght", person1.length); // wrong way because person is an object no an array

// To get the number of properties you will use the Object.keys().length trick
console.log("Number of the object properties", Object.keys(person1).length);

/*
The Object.values() method returns an array of a given
object's own enumerable property values, in the same
order as that provided by a for...in loop.
(The only difference is that a for...in loop enumerates
properties in the prototype chain as well.)
*/

for (const oneValue in person4){
    console.log("This is one value from the object", person4[oneValue])
}



const tween1 = {
  name: "Carlos",
  age: 24,
};

const tween2 = {
  name: "Carlos",
  age: 24,
};

console.log(tween1 === tween2, "Carlos" === "Carlos");
