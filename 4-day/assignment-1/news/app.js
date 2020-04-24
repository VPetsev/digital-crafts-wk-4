let allArticles = document.getElementById("allArticles")
let myArticles = news.articles

let articlesProperties = myArticles.map(function (article) {
    return `
        <div class="article-properties">
        <h1>${article.title}</h1>
        <h3>${article.author}</h3>
        <p>${article.description}</p>
        <span>${article.publishedAt}<span>
        <span><a>${article.url}</a></span> 
        <img src="${article.urlToImage}"/>
        </div>
        `
})

allArticles.innerHTML = articlesProperties.join(' ')