/* // Using the default JS class called Object
let car = {}
// curly bracks for an object

let myCar = {make: "honda", model:"Accord"}
car.drive = function() {
    console.log("driving...")
}

let myCar2 = { make: "honda", model: "Accord" }
myCar2.drive() // Wont work

*/
// Want to iterate through an array full of JS objects
// 100+

console.log(posts)

for (let i = 0; i<posts.length; i++){
   let currentPost = posts[i]
   console.log(`title: ${currentPost.title}`)
   console.log(`body: ${currentPost.body}`)
}