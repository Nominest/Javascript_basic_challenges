//Arrays
//those are the same
let colors = new Array("red", "green", "black");
console.log(colors);
console.log(colors[0]);

let colors2 = ["white", "aqua", "orange"];
console.log(colors2);
console.log(colors2[0]);
console.log(colors2.length);

//array inside an array
let vehicles = [
  "Ford",
  ["Fiesta", "Taurus", "Explorer"],
  "Honda",
  ["Pilot", "Civic", "Accord"],
  "Toyota",
  ["Corolla", "Prius", "Camry"],
];
console.log(vehicles[1][2]);

//practice
let animals = ["cat", "chicken", "dog"];
console.log(animals.push("llama"));
console.log(animals.splice(1, 1));
console.log(animals.sort());
console.log(animals.push("dog"));
console.log(animals[animals.length - 1]);
