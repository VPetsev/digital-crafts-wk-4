let taskNameTextBox = document.getElementById("taskNameTextBox")
let addTaskButton = document.getElementById("addTaskButton")

let pendingTasksList = document.getElementById("pendingTasksList")
let completedTasksList = document.getElementById("completedTasksList")
let removeButtonsList = document.getElementsByClassName("remove")

// adding functionality to remove button


function checkboxStatus(checkBoxId, toDoItemId){
    let checkBox = document.getElementById(checkBoxId)
    let itm = document.getElementById(toDoItemId)
    if (checkBox.checked == true){
        let completedTasksList = document.getElementById("completedTasksList")
        completedTasksList.prepend(itm)
    }
    else if (checkBox.unchecked == true) {
        let pendingTasksList = document.getElementById("pendingTasksList")
        pendingTasksList.prepend(item)
    }
}

function createPendingListItem(){
    // Creating a pending task element
    let pendingLiItem = document.createElement("li")
    // Assigning a class with classList.add
    pendingLiItem.classList.add("listItem")
    return pendingLiItem
}

// Creating the checkbox and assigning type
function createCheckBox(){
    let pendingLiItemCheckBox = document.createElement("input")
    pendingLiItemCheckBox.classList.add("checkbox")
    pendingLiItemCheckBox.type = "checkbox"
    pendingLiItemCheckBox.onclick = "checkedCheckboxStatus()"
    return pendingLiItemCheckBox
}

addTaskButton.addEventListener("click", function () {
    let listItem = createPendingListItem()
    let itemCheckbox = createCheckBox()
    let taskName = document.createElement("p")
    taskName.innerHTML = taskNameTextBox.value
    taskName.classList.add("listItemText")
    listItem.appendChild(itemCheckbox)
    listItem.appendChild(taskName)

    pendingTasksList.appendChild(listItem)

})

function assignPendingTasksIds() {
    let pendingTasksList = document.getElementById("pendingTasksList")
    if ((pendingTasksList.children.length) == 0) {
        // pass
        console.log('length is 0')
    } else {
        for (let i = 1; i < pendingTasksList.children.length; i++) {
            console.log(`pending task ${i}`)
            let currentTask = pendingTasksList.children[i]
            currentTask.setAttribute("id", `toDoItem-${i}`)
        }
    }
}
assignPendingTasksIds

function assignCompletedTasksIds() {
    let completedTasksList = document.getElementById("completedTasksList")
    for (let i = 1; i < completedTasksList.children.length; i++) {
        console.log(`completed task ${i}`)
        console.log(`completed task ${completedTasksList.children.length}`)
        let currentTask = completedTasksList.children[i]
        currentTask.setAttribute("id", `completedToDoItem-${i}`)
    }
}
assignCompletedTasksIds

function addRemoveButton(){
    
    console.log('text')
    let itemRemove = document.createElement("button")
    let removeButtonsList = document.getElementsByClassName("remove")
    for (let i = 0; i < removeButtonsList.length -1 ; i++)
        console.log(`i is ${i}`)
        console.log(removeButtonsList[i])
    console.log(removeButtonsList[1])
    console.log(removeButtonsList[2])
}
addRemoveButton()
// addRemoveButton()
// checks if existing elements have remove options and adds if it doesn't
// some don't
// can do the same for checkboxes if there's time
// let nodeList = document.getElementsByTagName("li")
// for (let i = 0; i < nodeList.length; i++) {
//     if (nodeList[i].children.length < 3) {
//         removeButton(nodeList[i])
//     }
// }