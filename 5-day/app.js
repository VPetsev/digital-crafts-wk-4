// Create a page which allows users to search for stock quotes.
// The page will consist of a TextBox where users can enter the symbol of the stock they are looking for.
// When the user presses the "Show Quotes" button the app will call the "getStockQuote" function implemented in stockQuotes.js(attached) and get the stock quotes.
// You should update the quotes every 2 seconds by making a call to getStockQuote function.Your app should display the name of the stock and also the price of the stock.

/* <input id="textbox" type="text"></input> */
/* <button id="button">get quote</button> */

let textbox = document.getElementById("textbox")
let button = document.getElementById("button")
let quote = document.getElementById("quote")

button.addEventListener("click", function(){
    let userInput = textbox.value
    
    
    setinterval(function(){
        let stockQuote = getStockQuote(userInput.toUpperCase())
        // every three seconds we want to get the updated quote
        quote.innerHTML = `${stockQuote.name} - $${stockQuote.price}`



    }, 2000)
})

