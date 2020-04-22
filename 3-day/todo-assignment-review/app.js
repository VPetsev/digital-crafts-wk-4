// addTaskButton
// taskTextBox
// pendingList
console.log(this)

let taskTextBox = document.getElementById("taskTextBox")
let addTaskButton = document.getElementById("addTaskButton")
addTaskButton.addEventListener("click", function(){
    let liItem = document.createElement("li")
    
    let label = document.createElement("label")
    label.innerHTML = taskTextBox.value
    
    // have to add a Node when using NodeChild
    let removeButton = document.createElement("button")
    removeButton.addEventListener('click', function() {

        // this is a button element because currently we are inside the event of the button
        console.log(this)

        // code fired when you click the remove button
        console.log("remove button click")
        // need to specify which li will be removed
        pendingList.removeChild(liItem) // A node has to be passed

    })
    removeButton.innerHTML = "remove Task"

    liItem.appendChild(label);
    pendingList.appendChild(liItem)

    liItem.appendChild(removeButton)




})