// startTime
// button

let button = document.getElementById('button')
let startTime = document.getElementById('startTime')
let countdownList = document.getElementById('countdownList')





button.addEventListener("click", function(){
    let startingInput = startTime.value
    let counter = startingInput

    window.setInterval(function(counter) {
        if (counter > 0){
            counter -= 1
        }
    }, 1000)


})




// function tick() {
//     console.log("TICK")
// }

// let id = window.setInterval(function () {
//     console.log("TICK")
//     let tickItem = `<li>TICK</li>`
//     wordList.insertAdjacentHTML('beforeend', tickItem)
// }, 1000)

