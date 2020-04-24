let dishList = document.getElementById("dishList")

let dishItems = dishes.map(function(dish) {
    return `<li>
    <h2>
    ${dish.title}
    </h2>
    <p>${dish.description}</p>
    </li>`
})

console.log(dishItems)

dishList.innerHTML = dishItems.join(" ")

console.log(dishItems)