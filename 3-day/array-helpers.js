// Use a map function to return an array which will return a double of each number.
// Example:
// input: [1, 2, 3, 4]
// output: [1, 4, 6, 8]
// 2) Use the filter function to return even numbers from an array
// Example:
// input: [2, 3, 4, 5, 6, 7, 8, 10]
// output: [2, 4, 6, 8, 10]
// 3) Use the find function to return the object with name is "Jay"
// Example:
// input:
// let users = [
//     { name: "Jay", age: 34 },
//     { name: "John", age: 20 },
//     { name: "Mary", age: 45 }
// ]
// output:
// { name: "John", age: 20 }

function doubler(arr) {
    return arr.map((i) => i*2) 
}
console.log(doubler([1, 2, 3, 4]))

function evenNums(arr) {
    return arr.filter((index) => index%2==0)
}

console.log(evenNums([2, 3, 4, 5, 6, 7, 8, 10]))

function jayFinder(arr){
    return arr.find(obj => obj.name === "Jay")
}

console.log(jayFinder([
    { name: "Jay", age: 34 },
    { name: "John", age: 20 },
    { name: "Mary", age: 45 }
]))



let newarr12 = [
    { name: "Jay", age: 34 },
    { name: "John", age: 20 },
    { name: "Mary", age: 45 }
]

newarr12.forEach((item)=>console.log(item))

let newarr4 = [1,23,5,556,7]
console.log(newarr4.find(2))

let newUsersArray = users.map(function(x){
    x.address = "123 st"
    x.age = 100
    return x
})