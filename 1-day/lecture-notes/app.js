
// console.log only used for the developer
// has no meaning to the user
console.log("introduction to javascript")


// creating variables in javascript
let a = 10
let name = "John"
var b = 15

// const pi = 3.141 // use const for values that don't change

pi = 3.15 // error because we are changing the constant value 

// functions
function sayHello(){
  console.log("hello!")
}

// call the function sayHello
sayHello()

displayName("John Doe") // Works!

function displayName(name) {
  console.log(name)
}

displayName("John Doe")

function add(firstNumber, secondNumber) {
  console.log(firstNumber + secondNumber)
}

add(2,3)

function getName(name) {
  return name + " Something"
}

let fullName = getName("John")
console.log(fullName)

// ARRAYS

let tasks = [] // creating an empty array

// add items to the array
// no append in JS
tasks.push("Wash the car")
tasks.push("Feed the dog")

console.log(tasks)

// DELETING ITEM FROM ARRAY
// let deletedTask = tasks.pop()
// console.log(deletedTask + " has been removed!")

// DELETING ITEM BASED ON INDEX
// delete tasks[0]
// console.log(tasks) // [empty, "Feed dog"]

// DELETING ITEM USING SPLICE
// tasks.splice(0, 1)
// console.log(tasks)

// ITERATING AN ARRAY
    //    PYTHON FOR LOOP
    // for index in Range(0,len(tasks), 1):
    //   print( index)


for (let index = 1; index <= 10; index++){
  console.log(index)
}

// reverse order 
for(let index = 10; index > 0; index--){
  console.log(index)
}

// print the items of the array
for (let index = 0; index < tasks.length; index++) {
  console.log(tasks[index])
}
// Accessing the items of the array - use a subscript [] - tasks[index]
console.log(tasks[0]) // wash the car
console.log(tasks[10]) // undefined


let names = ["michael", "john", "apple"]
for (let i = 0; i < names.length; i++) {
  console.log(names[i])
  console.log(i)
}

// WHILE LOOP
// let count = 1
// while (count < 10){
//   console.log(count)
//   count ++
// }

console.log("CONDITIONS")
let version = 2
let os = "macOS"


// && is equals to "and"
// || is equal to "or"
if(version == 1 && os == "macOS"){
  console.log("Version is 1")
} else if (version == 2 || os == "Windows") {
  console.log("Version no is 2")
} else if (version == 3) {
  console.log("Version no is 3")
} else {
  console.log("Undefined version number")
}

// CODE TO CHECK IF THE LETTER IS A VOWEL (a, e, i, o, u)
let letter = "a"
if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter=="u") {
  console.log("Vowel")
} else {
  console.log("Not a Vowel")
}
// SAME AS ABOVE CODE
if (letter == ("a" || "e" || "i" || "o" || "u")) {
  console.log("Vowel1")
} else {
  console.log("not a vowel")
}

// Activity 2
let no1 = 30
let no2 = 40

function computeSum(firstNumber, secondNumber) {
  let result = firstNumber + secondNumber
  if(result >= 50 && result <= 80) {
    return 65
  } else {
    80
  }
}


console.log(computeSum(15, 45))

  // Classes
// 
