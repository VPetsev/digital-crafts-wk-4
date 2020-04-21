let redButton = document.getElementById("redButton")
let blueButton = document.getElementById("blueButton")

redButton.addEventListener("click", function(){
    document.body.style.background = "cyan"
    document.h1.style.display = "flex"
})

blueButton.addEventListener("click", function () {
    document.body.style.background = "blue"
})