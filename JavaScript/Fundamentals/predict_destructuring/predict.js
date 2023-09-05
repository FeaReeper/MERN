// PROBLEM 1

const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)

// ANSWER 1 = This will console.log Tesla and then console.log Mercedes

// PROBLEM 2

const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name);
console.log(otherName);

// ANSWER 2 = name will not be able to console.log because name is now otherName


// PROBLEM 3

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);

// ANSWER 3 = output will be 12345 and undefined. there is nothing with a key of password in the person dictionary


// PROBLEM 4

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);
console.log(first == third);

// ANSWER 4 = first = 2, second = 5, and third = 2... 2 does not = 5, so false And 2 does = 2, so true. 


// PROBLEM 5

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;  // key = 'value'
const { secondKey } = lastTest;  // secondKey = [1, 5, 1, 8, 3, 3]
const [ ,willThisWork] = secondKey; // willThisWork = 5
//Predict the output
console.log(key);  // Should log 'value'
console.log(secondKey);  // Should log [1, 5, 1, 8, 3, 3]
console.log(secondKey[0]);  // if works then should log 1
console.log(willThisWork);  // if worked then log 5

// ANSWER 5 = I wrote this prediction above. It all works but doesn't the platform imply that we shouldn't use secondKey[i],
//           instead do like line 64 but without the comma and name it something else?