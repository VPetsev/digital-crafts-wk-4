let taskNameTextBox = document.getElementById("taskNameTextBox")
let addTaskButton = document.getElementById("addTaskButton")

let pendingTasksList = document.getElementById("pendingTasksList")

function removeButton(whereToAdd){
    let itemRemove = document.createElement("p")
    itemRemove.classList.add("remove")
    itemRemove.innerHTML = "Remove"
    whereToAdd.appendChild(itemRemove)
}

// checks if existing elements have remove options and add if it doesn't
// some don't
// can do the same for checkboxes if there's time
let nodeList = document.getElementsByTagName("li")
for (let i = 0; i < nodeList.length; i++) {
    if (nodeList[i].children.length < 3) {
        removeButton(nodeList[i])
    }
}

function checkboxStatus(checkBoxId, toDoItemId){
    let checkBox = document.getElementById(checkBoxId)
    let itm = document.getElementById(toDoItemId)
    if (checkBox.checked == true){
        completedTasksList.prepend(itm)
    }
    else if (checkBox.unchecked == true) {
        let cln = itm.cloneNode(true)
        pendingTasksList.appendChild(cln)
    }
        // how to remove the old node? destroy or delete
}


addTaskButton.addEventListener("click", function() {
    // Creating a pending task element
    let pendingLiItem = document.createElement("li")

    // Creating a list with class 'listitem', 
    pendingLiItem = document.createElement("li")
    // Assigning a class with classList.add
    pendingLiItem.classList.add("listItem")
    
    // Creating the checkbox and assigning type
    let pendingLiItemCheckBox = document.createElement("input")
    pendingLiItemCheckBox.classList.add("checkbox")
    pendingLiItemCheckBox.type = "checkbox"
    pendingLiItemCheckBox.onclick = "checkboxStatus()"

    // appending checkbox first, so checkbox appears on left
    pendingLiItem.appendChild(pendingLiItemCheckBox)

    // creating a paragraph for task name
    let taskName = document.createElement("p")
    taskName.innerHTML = taskNameTextBox.value
    pendingLiItem.appendChild(taskName)

    
    // // Initializing the remove button as a paragraph with class remove
    // let pendingLiItemRemove = document.createElement("p")
    // pendingLiItemRemove.classList.add("remove")
    // pendingLiItemRemove.innerHTML = "Remove"
 
    // // assigning remove to liItem
    // pendingLiItem.appendChild(pendingLiItemRemove)
    removeButton(pendingLiItem)

    pendingTasksList.appendChild(pendingLiItem)

})






// function moveTaskButton(){
//     if (itm.checked) {
//         let cln = itm.cloneNode(true)
//         completedTasksList.appendChild(cln)
//     }
// }