let numbers = [3,4,5,6,7]

// want to multiply each number by 2

// let newArr = []
// for (let index = 0; index < numbers.length; index++){
//     let result = numbers[index] * 2
//     newArr.push(result)
//     console.log(result)
// }
// console.log(newArr)




// ARRAY HELPERS
// Array Helpers ONLY WORK ON AN ARRAY
// Always return a brand new array

    // are things like reduce, filter, sum array helpers or something else?  

// MAP - is a function in which you pass in another function
    // Always returns you a brand new array based on what is inside the anonymous function
    // MAP - USUALLY RETURNS A BRAND NEW ARRAY


    // The function should take a single argument
/*
function doubleValue(number) {
    return number + 1
}

numbers.map(doubleValue)
*/

let array = numbers.map(function(no) {
    return no * 2
})
console.log(array)


// FILTER IS AN ARRAY HELPER
// FILTER CAN ONLY BE CALLED ON AN ARRAY



let someNumbers = [1,2,3,4,5,6,7,8,9]

// Want to make a new array with odd numbers only
let oddNumbers = []
for (let index = 0; index < someNumbers.length; index++) {
    if (someNumbers[index] % 2 != 0) {
        oddNumbers.push(someNumbers[index])
    }
}
console.log(oddNumbers)

// Filter returns true or false
// If true = item is added to the final array
// False = item is not added to the final array

let oddNums = someNumbers.filter(function(n){
    return (n % 2) != 0 ? true:false
})

console.log(oddNums)
// result = [1,3,5,7,9]



// For Each

// Find

// Some

// Every

// Reduce

