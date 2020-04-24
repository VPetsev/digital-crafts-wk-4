let nameHeading = document.getElementById("nameHeading")

let firstName = "John"
let lastName = "Doe"
let age = 34

// John, Doe

// TEMPLATE LITERALS
// ` is called a backtick

nameHeading.innerHTML = `Greeting ${firstName}, ${lastName}`

// Adding html codes to template literals will be applied
nameHeading.innerHTML = `This is a <button>Submit Button</button>`

// Only use template literals to create dynamic things

// In this activity you will ask the user for their firstname and lastname using TextBoxes.When the user presses the button you will concate firstname and lastname using template literal and show it on the user interface. 

let textBoxDiv = document.createElement("textBoxDiv")

let div = document.createElement("div")
let textBox = document.createElement("text")
let button = document.createElement("button")

button.innerHTML = "Push"

textBoxDiv.appendChild(textBox)
textBoxDiv.appendChild(button)

textBoxDiv.appendChild(div)

let buttons = document.getElementById("button")

buttons.addEventListener("click", function() {

}) 

let taskList = document.getElementById("taskList")

function removeTask(btn){
    // console.log('remove task was called')
    // how to remove a task
    console.log(btn.parentElement)
    taskList.removeChild(btn.parentElement)
}

function removeTask2(e){
    // e.srcElement is a button Element 
    console.log(e.srcElement)
}


addTaskButton.addEventListener("click", function() {

    // create li element and add to the ul
    let taskName = taskTextBox.value

    let taskItem = `<li>
        <input type='checkbox'/>
        <label>${taskName}</label>
        <button onclick='removeTask(this)'>Remove</button>
        <button onclick='removeTask2(event)'>Remove Using Event</button>
    </li>`

    taskList.innerHTML += taskItem // Not recommended because it repeatedly adds things

    // taskList.insertAdjacentHTML(where to insert, string)
    taskList.insertAdjacentHTML('beforeend', taskItem)
})