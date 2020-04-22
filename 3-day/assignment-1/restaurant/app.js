 // calling UL

// List of dish titles
function dishTitles(arr) {
    let titleList = arr.map(index => index.title);
    return titleList
}

// List of dish image URLS
function dishImages(arr) {
    let imageList = arr.map(index => index.imageURL);
    return imageList
}

// list of dish prices
function dishPrice(arr) {
    let priceList = arr.map(index => index.price);
    return priceList
}

// list of dish descriptions
function dishDescriptions(arr) {
    let descripList = arr.map(index => index.description);
    return descripList
}

function addFilterButtons(){
    let buttons = document.getElementById("buttons")
    let dessertButton = document.createElement("button")
    let starterButton = document.createElement("button")
    let entreeButton = document.createElement("button")

    starterButton.innerHTML = "Starters"
    starterButton.setAttribute("id", "Starters")
    starterButton.setAttribute("onClick", "filterButton(this.id)")

    entreeButton.innerHTML = "Entrees"
    entreeButton.setAttribute("id", "Entrees")
    entreeButton.setAttribute("onClick", "filterButton(this.id)")

    dessertButton.innerHTML = "Desserts"
    dessertButton.setAttribute("id", "Desserts")
    dessertButton.setAttribute("onClick", "filterButton(this.id)")

    buttons.appendChild(starterButton)
    buttons.appendChild(entreeButton)
    buttons.appendChild(dessertButton)
}
addFilterButtons()

function filterButton(buttonClicked){
    dishes.filter(course => course.course === buttonClicked)
    // how to update the menu items displayed?
    // add an optional parameter to menuItems
}

filterButton()

function allMenuItems() {
    let itemsUlList = document.getElementById("itemsUlList")
    for (let i = 0; i < dishes.length; i++) {
        let list = document.createElement("li");
        let label = document.createElement("label")
        let paraPrice = document.createElement("p");
        let paraDesc = document.createElement("p");
        let image = document.createElement("img");

        // creating label
        label.innerHTML = dishTitles(dishes)[i]
        list.appendChild(label)
        // creating paragraphs - price and desc
        paraPrice.innerHTML = dishPrice(dishes)[i]
        list.appendChild(paraPrice)

        paraDesc.innerHTML = dishDescriptions(dishes)[i]
        list.appendChild(paraDesc)

        image.setAttribute("src", String(dishImages(dishes)[i]))
        image.setAttribute("width", "200px")
        image.setAttribute("height", "200px")
        list.appendChild(image)

        itemsUlList.appendChild(list)
    }
}
allMenuItems()

