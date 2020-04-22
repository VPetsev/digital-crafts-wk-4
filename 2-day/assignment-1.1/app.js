let textBoxInput = document.getElementById("taskNameTextBox") //Textbox input
let addTaskButton = document.getElementById("addTaskButton") // add task button

let pendingTasksList = document.getElementById("pendingTasksList") // ul of #incomplete task
let completedTasksList = document.getElementById("completedTasksList") // ul of #completedTasks

let removeButtonList = document.getElementsByClassName("Remove")

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
	console.log(pendingLiItemCheckBox.onclick)

	// appending checkbox first, so checkbox appears on left
	pendingLiItem.appendChild(pendingLiItemCheckBox)

	// creating a paragraph for task name
	let taskName = document.createElement("p")
	taskName.innerHTML = taskNameTextBox.value
	pendingLiItem.appendChild(taskName)
})


function checkboxStatus(checkBoxId, toDoItemId) {
	let checkBox = document.getElementById(checkBoxId)
	let itm = document.getElementById(toDoItemId)
	if (checkBox.checked == true) {
		completedTasksList.prepend(itm)
	}
	else if (checkBox.unchecked == true) {
		pendingTasksList.prepend(itm)
	}
	// how to remove the old node? destroy or delete
}

function removeButtonAdder(whereToAdd) {
	let itemRemove = document.createElement("button")
	itemRemove.classList.add("Remove")
	itemRemove.innerHTML = "Remove"
	whereToAdd.appendChild(itemRemove)
} 



for (let i = 0; i < removeButtonList.length; i++) {
	// set onclick for each remove element
	let removeButtonList = document.getElementsByClassName("Remove")
	let newvar = removeButtonList[i]
	newvar.setAttribute("onclick", "deleteItem()")

}

function removeItem() {
	console.log("Remove Task...")
	let removeButton=completedTasksList.que
	let listItem=this.parentNode

	var ul=listItem.parentNode
	ul.removeChild(listItem)
}

function bindRemoveButton(){
	let removeButton = task
}

	// // Initializing the remove button as a paragraph with class remove
	// let pendingLiItemRemove = document.createElement("p")
	// pendingLiItemRemove.classList.add("remove")
	// pendingLiItemRemove.innerHTML = "Remove"

	// // assigning remove to liItem
	// pendingLiItem.appendChild(pendingLiItemRemove)
// 	removeButton(pendingLiItem)

// 	pendingTasksList.appendChild(pendingLiItem)

// })






// function moveTaskButton(){
//     if (itm.checked) {
//         let cln = itm.cloneNode(true)
//         completedTasksList.appendChild(cln)
//     }
// }