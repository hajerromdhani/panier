function plusArticle(event) {
  var article = event.target.parentElement
  article.querySelector(".ajout").value++
  return article
}

function moinArticle(event) {
  var marticle = event.target.parentElement
  if (marticle.querySelector(".ajout").value > 0) {
    marticle.querySelector(".ajout").value--
  }
  return marticle
}

document.addEventListener("click", function (event) {
  if (event.target.className == "btn_plus") {
    plusArticle(event)
    totalArticles(event)
  }
})
document.addEventListener("click", function (event) {
  if (event.target.className == "btn_moin") {
    moinArticle(event)
    totalArticles(event)
  }
})
function totalprix() {
  var products = document.querySelectorAll(".product")
  //console.log(products)
  let total = 0
  for (let prod of products) {
    quantite = prod.querySelector(".ajout").value
    unitprice = prod.querySelector(".unitprice").innerHTML
    total += quantite * unitprice
    //console.log(prod)
  }
  return total
}
function totalArticles(event) {
  var articles = document.getElementById("total").innerHTML = totalprix()
  return articles
}
function removeArticle(event) {
  var articleRemove = event.target.parentElement.parentElement.remove();
  return articleRemove
}

document.addEventListener("click", function (event) {
  if (event.target.className == "btn-remove") {
    removeArticle(event)
    totalArticles(event)
  }
})