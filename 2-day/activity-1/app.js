let firstNameTextField = document.getElementById("firstNameTextBox")
let lastNameTextField = document.getElementById("lastNameTextBox")

// H1 Element
let fullNameHeading = document.getElementById("fullNameHeading")

let submitButton = document.getElementById("submitButton")

submitButton.addEventListener("click", function(){
    //button click
    console.log("clicked!")

    let firstName = firstNameTextField.value
    let lastName = lastNameTextField.value

    // update the heading to show the fullname of the person
    fullNameHeading.innerHTML = firstName + " " + lastName

    


    console.log(firstName, lastName)
})x