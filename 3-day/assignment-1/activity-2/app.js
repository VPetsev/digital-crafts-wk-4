let textBox = document.getElementById("textBox")
let addButton = document.getElementById("button")
let friendsList = document.getElementById("friendsList")

addButton.addEventListener("click", function(){
    // do something to add 
    let friendName = textBox.value // getting the textbox input using value
    let friendInfo = `<li> 
        <span>${friendName}</span>
        <button>Remove</button>
    </li>`

    friendsList.insertAdjacentHTML('beforeend', friendInfo)
})