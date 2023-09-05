// // variables and data types

// // integer
// var luckyNum = 7

// // string
// var name = 'Ken'

// // boolean
// var isHungry = true

// // array or list (python)
// var names = ['Ken', 'Garrett', 'Jose', 'Matt']

// // object or dictionary (python)
// var ken = {
//     firstName: 'Ken',
//     power: 'Kenergy',
//     isHuman: false
// }

// console.log(ken.firstName)
// console.log(names[2])

// // functions

// function sayHi(name) {
//     console.log('Hello ' + name)
// }

// sayHi(names[3])

// // for loops / conditionals

// for(var i = 0; i < names.length; i++){
//     console.log(names[i])
//     if(names[i] == 'Ken'){
//         console.log("Ken has Kenergy!")
//     }
//     else if (names[i] == 'Matt'){
//         console.log('Matt was found!')
//     }
//     else {
//         console.log(names[i])
//     }
// }


// ES6 Way of writing this

// // integer
// let luckyNum = 7

// // string
// let name = 'Ken'

// // boolean
// let isHungry = true

// // array or list (python)
// let names = ['Ken', 'Garrett', 'Jose', 'Matt']

// const ken = {
//     firstName: 'Ken',
//     power: 'Kenergy',
//     isHuman: false
// }

// ken.age = 35
// console.log(ken)

// const sayHi = (name) => {
//     console.log(name)
// }
// sayHi("Ken")


// // spread operator

// let arr1 = [1,2,3]
// let arr2 = [4,5,6]
// let comboArr = [...arr1, arr2]
// console.log(comboArr)




// After class practice

let canAfford = (itemPrice, accountBalance) => {
    return itemPrice > accountBalance
    ? console.log(`Can't Afford! You are $${itemPrice - accountBalance} short`)
    : console.log(`Can afford! Your account balance is $${Math.round(((accountBalance - itemPrice) * 100) / 100)}`)
}

let myAccount = 1000
let drone = 1001
let droneDiscounted = drone - drone * 0.03

console.log(canAfford(drone, myAccount))
console.log(canAfford(droneDiscounted, myAccount))