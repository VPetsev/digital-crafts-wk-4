let formInput = document.getElementById("formInput")
let firstName = document.getElementById("formInput")[0]
let lastName = document.getElementById("formInput")[1]
let email = document.getElementById("formInput")[2]
let password = document.getElementById("formInput")[3]


let enterButton = document.getElementById("enterButton")
let successMessage = document.getElementById("successMessage")


formInput.addEventListener("submit", function() {
    successMessage.innerHTML = "Successfully Subscribed to cat facts"
})

// enterButton.addEventListener("click", function() {

//     successMessage.innerHTML = "Successfully Subscribed to cat facts"
// })

//     < script >
//     function validateForm() {
//         var x = document.forms["myForm"]["fname"].value;
//         if (x == "") {
//             alert("Name must be filled out");
//             return false;
//         }
//     }
// </script >
// </head >
//     <body>

//         <form name="myForm" action="/action_page.php" onsubmit="return validateForm()" method="post">
//             Name: <input type="text" name="fname">
//                 <input type="submit" value="Submit">
// </form>
