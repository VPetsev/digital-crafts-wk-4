// window represents the window browser

// setTimeout(function, time in milliseconds) - Can pass in a function

function tick() {
    console.log("TICK")
}
window.setInterval(tick, 600)
// tick is used here as callback function
// means that it will be called back in 5 seconds

// set timeout is used only once 
// window.setTimeout(tick, 5000) // This is a callback function



// set interval is called repeatedly
// window.setInterval(tick, 2000)

// set interval using anonymous function
// window.setInterval(function() {
//     console.log("TICK")

// }, 2000)

// want to add something to the UI
// let intervalID = window.setInterval(function() {
//     // console.log("TICK")
//     let tickItem = `<li>TICK</li>`
//     wordList.insertAdjacentHTML('beforeend', tickItem)
// }, 1000)

// console.log(intervalID)

// window.setTimeout(function() {
//     window.clearInterval(intervalID)
// }, 5000)

// window.clearInterval(intervalID) --  clear or stop the interval
// setinterval doesnt actually run because this is called before it actually has time to 

function getCustomers() {

    window.setTimeout(function() {
        console.log("TIMEOUT function fired")
    }, 1000)

    console.log("GET CUSTOMERS FIRED")
}

getCustomers()