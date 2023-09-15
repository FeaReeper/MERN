const nums = [23,56,19,20,9,20,78,55,32,42,8,20,80]

// PROBLEM 1: Given the array above use the map method to return a new array of all the numbers multiplied by 2

const multipleOfTwo = (nums) => {
    const result = []
    nums.map((num) => {
        result.push(num * 2)
    })
    return result
}
// console.log(multipleOfTwo(nums))

// Easy way for problem 1
const easyWay = nums.map((num) => num * 2)
// console.log(easyWay)


// PROBLEM 2: Given the array above use the filter method to return a new array of only numbers larger than 50
const largerFifty = nums.filter((num) => num > 50)
// console.log(largerFifty)


// PROBLEM 3: Given the array above use the filter method to return an array of only numbers divisible by 3
const divisibleByThree = nums.filter((num) => num % 3 == 0)
console.log(divisibleByThree)

// PROBLEM 4: Given the array above write a function that takes in a number to remove from the array and 
// returns the new array with all the numbers besides that numbers. Use the filter method for this

// const removeNum = nums.filter((num, numToRemove) => (numToRemove !== num))
const removeNum = (nums, input) => {
    nums.filter(nums)
}
console.log(removeNum)