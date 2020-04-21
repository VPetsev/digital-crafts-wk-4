// textbox
let nameTextBox = document.getElementById("nameTextBox")

console.log(nameTextBox.value)
// access button
let submitButton = document.getElementById('submitButton')

// function submitButtonPressed() {
//     console.log("Submit Button pressed") // Worked!

// }

// submitButton.addEventListener("click", submitButtonPressed) 
// Assigning a function means you can just randomly call submitButtonPressed - so maybe we can use an anon function

submitButton.addEventListener("click", function() {
    let fullName = nameTextBox.value
    console.log(fullName)
})

