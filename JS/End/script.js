// function printDetail() {
//   console.log("Name: Pakistan");
//   console.log("Color: Red");
//   console.log("Currency: PKR");
//   console.log("Capital: ISB");
// }

// printDetail();

// function sum(num1, num2) {
//   console.log(num1 + num2);
// }

// console.log("Numbers of 1st Child: ");
// sum(10, 20);

// console.log("Numbers of 2nd Child: ");
// sum(40, 50);

// console.log("Numbers of 3rd Child: ");
// sum(70, 65);

// // calculate age in years.
// const calculateAge = (age, name) => {
//   let userAge = 2024 - age;
//   return `${name} is ${userAge} years old`;
// };

// let talhaAge = calculateAge(2001, "Talha");
// console.log(talhaAge);

// /*

// Function

// Block of Code

// 1. Takes input
// 2. Process it
// 3. Output (Return something)

// 1. Declaration

// function printDetail() {
//   console.log("function body");
// }

// 2. Expression

// const printDetail = function () {
//   console.log("function body");
// };

// */

// const printDetail = () => {
//   console.log("function body");
// };

// printDetail();

// Write a function called sum that takes
// in two numbers as parameters
// and returns their sum.

function sum(num1, num2) {
  let sum = num1 + num2;

  return sum;
}

console.log(sum(10, 20));
console.log(sum(90, 10));

/*

10/2 = 5
28/4 = 7

8 / 3 = 2

11/5 = 1

19/6 = 1

25/7 = 4


name --> isEven

if - else 

*/

function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

const nbr = isEven(119213221);
console.log(nbr);

/*

Write a function called convertTemperature that takes in a temperature
in Celsius as a parameter and returns the equivalent temperature in
Fahrenheit.


6. Write a function called countVowels that takes in a string as a parameter
and returns the number of vowels in the string. For example,
countVowels("hello") should return 2

*/

function convertTemperature(celcius) {
  let temperature = (celcius * 9) / 5 + 32;
  return temperature;
}

let temp = convertTemperature(37);
console.log(temp);

/*

*/

function countVowels(str) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      count = count + 1;
    }
  }

  return count;
}

let total = countVowels("hello how are you?");

console.log(total);

/*

name, age, address, grade, father ==> 5

5 * 1000 ==> 5000 (lines)

*/

let studentNames = ["Talha", "Ali", "Zeeshan", "Umar"];
let studentAges = [30, 25, 27, 20];
let studentAddress = ["Pak", "UK", "USA", "IND"];

for (let i = 0; i < 4; i++) {
  console.log(
    `${studentNames[i]} is ${studentAges[i]} years old living in  ${studentAddress[i]}`
  );
}

// console.log(studentNames);
// //studentNames.push("Ikram");
// //studentNames.pop();
// console.log(studentNames);

// console.log(studentNames);
// studentNames.unshift("Ikram");
// //studentNames.pop();
// studentNames.sort();
// console.log(studentNames);

console.log(studentNames.indexOf("Ali"));
console.log(studentNames.indexOf("Umar"));

/*


1. Write a program that prompts the user to enter five numbers and stores
them in an array. Then, output the sum of the numbers to the console

2. Write a function called findMax that takes in an array of numbers as a
parameter and returns the largest number in the array.

3. Write a program that prompts the user to enter a sentence and stores
each word in an array. Then, output the length of the array to the
console.

4. Write a program to take an array and print average of all the elements of
array.

5. Write a program to output only those elements who are multiple of
three(3) or five(5).
Good Luck


*/

/*
1. Write a program that prompts the user to enter five numbers
 and stores them in an array. 
 Then, output the sum of the numbers to the console

*/

// 1. 5 inputs
// 2. store in array
// 3. sum of numbers

// let numbers = [0, 0, 0, 0, 0];

// for (let i = 0; i <= 4; i++) {
//   numbers[i] = Number(prompt("Enter No 1"));
// }

// console.log(numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4]);

function findMax(numbers) {
  numbers.sort((a, b) => a - b); //[2,2,4,5,51]
  console.log(numbers);

  return numbers[numbers.length - 1];
}

let maximum = findMax([4, 2, 51, 2, 5, 2, 12, 132, 29, 12]);
console.log("Max", maximum);

let person = {
  name: "Talha",
  age: 23,
  address: "Pakistan",
  degree: "SE",
  company: "Devoin Labs",
  cgpa: 3.2,
};

console.log(person.name);
console.log(person.age);

console.log(person.degree);

console.log(person.cgpa);

let cars = [
  {
    name: "SUZUKI CULTUS",
    model: 2022,
    variant: "VXL",
    doors: 4,
    windows: 4,
    engine: 1000,
    color: "black",
  },
  {
    name: "mehran",
    model: 2022,
    variant: "VXL",
    doors: 4,
    windows: 4,
    engine: 1000,
    color: "black",
  },
  {
    name: "Vigo",
    model: 2022,
    variant: "VXL",
    doors: 4,
    windows: 4,
    engine: 1000,
    color: "black",
  },
  {
    name: "Corolla",
    model: 2022,
    variant: "VXL",
    doors: 4,
    windows: 4,
    engine: 1000,
    color: "black",
  },
];

console.log(cars[0].color);

let car1 = {
  make: "Honda",
  model: "Civic",
  year: 2019,
};

let car2 = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
};

let car3 = {
  make: "Ford",
  model: "Mustang",
  year: 2018,
};

console.log(car1.make, car1.model, car1.year);

console.log(car2.make, car2.model, car2.year);

console.log(car3.make, car3.model, car3.year);

/*

Write a function called calculateTotalPrice that takes in an array of items (each
item represented as an object with properties for name and price) and returns
the total price of all items in the array

*/

function calculateTotalPrice(array) {
  let sum = 0;
  for (let i = 0; i < 4; i++) {
    sum = sum + array[i].price;
  }

  return sum;
}

let items = [
  { name: "Burger", price: 900 },
  { name: "Pizza", price: 1900 },
  { name: "Shawarma", price: 700 },
  { name: "Pasta", price: 1200 },
];

let totalPr = calculateTotalPrice(items);

console.log(totalPr);

function convert(minutes) {
  return minutes * 60;
}
