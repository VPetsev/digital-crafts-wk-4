let myArticles = news.articles
// let articlesProperties = myArticles.map(function(article) {
//     return `
//     <div class="article-properties">
//         <h1>${article.title ? article.title != null : 'null'}</h1>
//         <h3>${article.author ? article.author != null : 'null'}</h3>
//         <p>${article.description ? article.description != null : 'null'}Description</p>
//         <span>${article.publishedAt ? article.publishedAt != null : 'null'}<span>
//         <span><a>${article.url ? article.url != null : 'null'}</a></span> 
//         </div>`
//     })

let allArticles = document.getElementById("allArticles")

for (let i = 0; i < myArticles.length; i++) {
    let myTitles = myArticles.map(function (article) {
        if (article.title != null) {
            return article.title
        } else {
            return "null"
        }
    })
    console.log(myTitles.length)
    console.log(typeof(myTitles[i]))
    console.log(myTitles[i])
    allArticles.appendChild(`<h1>${myTitles[i]}</h1>`)
}

    // console.log(myAuthors[i])


// allArticles.insertAdjacentHTML('beforeend', myAuthors[i])console.log(news)

// logs an object (dictionary in python)
// how to access the array?

console.log(news.articles) // displays the new Articles

// Now can use a map to access the specific things (elements) PROPERTIES?

// let myArticles = news.articles // set to a var to make it easier to access

// now want to access a specific property

// let myAuthors = myArticles.map(function(article){
//     return article.author
// }) 

// can refactor function above to 1 line

// let myAuthors = myArticles.map(article => article.author) // same as function above
// console.log(myAuthors) // array of authors

// Now can repeat for each property

// oh wait, there's an easier way!
// template literals
    // how do i do that again?
        // need to access the articles
    // Already did that! -- see line 10
let myArticles = news.articles 
let articlesProperties = myArticles.map(function(article) {
    // how did i want to format this again?
        // can just look at my notes
        // or use an example html layout
        
    // <div class="article-properties">
    //     <h1>Title</h1>
    //     <h3>Author</h3>
    //     <?>published at<>
    //         <p>Description</p>
    //         <span><a>url</a></span>
    //         <img src="urlToImage" />
    //     </div>

        return `
    <div class="article-properties">
        <h1>${article.title ? article.title != null : 'null'}</h1>
        <h3>${article.author ? article.author != null : 'null'}</h3>
        <p>${article.description ? article.description != null : 'null'}Description</p>
        <span>${article.publishedAt ? article.publishedAt != null : 'null'}<span>
        <span><a>${article.url ? article.url != null : 'null'}</a></span> 
        </div>`
    })
    // dont have to document.createelement when using template literals

//why isn't it adding these things to the screen UI?
console.log(articlesProperties)

// forgot to set innerHTML and the .join()
    // ok... but how do i do that?
    // the problem is similar to the dishes app
        // but the data structure a bit different, good thing i mapped it out or else i'd be lost lol

        // im still lost - why? got distracted

    // how does the dish app work
    // it calls the dishList - which is where...
        // first thought, it's what the data variable is called. 
            // nope.
        // set in the html
        // so I should do the same
            // can i make it easier? attaching it to html body section?
            // looks like it should work, lets try
// experiment 
// let body = document.getElementsByTagName('body')// get elements by tag name is a thing, how does it work?
// body.innerHtml = articlesProperties
// doesn't seem to be working, not worth looking into
// can ask a dir if i remember to

// it wasn't inner html, it was the adjacent HTML (NOT element) thing
let allArticles = document.getElementById("allArticles")
allArticles.insertAdjacentHTML('beforeend', articlesProperties)

// getting a null value for something, break down into smaller parts 

// function listCleaner() {
//     for (let i = 0; i < articlesProperties.length; i++) {
//         console.log(typeof (articlesProperties[i]))
//         console.log(articlesProperties[i].replace(null, ""))
//         allArticles.appendChild(articlesProperties.replace(null, ""))
//     }
    
// }


for (let i = 0; i < articlesProperties.length; i++) {
    let myAuthors = myArticles.map(function(article){

        return article.author
    }) 
}
// Whats the issue?
    // can't append child to certain elements because it returns as null
    // currently tried to 

let myArticles = news.articles
// let articlesProperties = myArticles.map(function(article) {
//     return `
//     <div class="article-properties">
//         <h1>${article.title ? article.title != null : 'null'}</h1>
//         <h3>${article.author ? article.author != null : 'null'}</h3>
//         <p>${article.description ? article.description != null : 'null'}Description</p>
//         <span>${article.publishedAt ? article.publishedAt != null : 'null'}<span>
//         <span><a>${article.url ? article.url != null : 'null'}</a></span> 
//         </div>`
//     })

let allArticles = document.getElementById("allArticles")

for (let i = 0; i < myArticles.length; i++) {
    let myTitles = myArticles.map(function (article) {
        if (article.title != null) {
            return article.title
        } else {
            return "null"
        }
    })
    console.log(myTitles.length)
    console.log(typeof (myTitles[i]))
    console.log(myTitles[i])
    allArticles.appendChild(`<h1>${myTitles[i]}</h1>`)
}

    // console.log(myAuthors[i])


// allArticles.insertAdjacentHTML('beforeend', myAuthors[i])

let news = document.getElementById('news')

let articlesLI = news.articles.map(function(article){
    let liItem = `<h1>
        ${article.title}    
    </h1>`
    return liItem
})
news.innerHTML = articlesLi.join(" ")