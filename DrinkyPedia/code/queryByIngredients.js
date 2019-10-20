var http = require('http')
var console = require('console')
var test = require('./concatIngredients')

// Takes n string arguments for ingredients, returns array.

module.exports.function = function queryByIngredients (strIngredient1) {
  console.log("is it queryBYingredientsjs")
  var apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i='
  var results = []
  
  var random_num = Math.floor(Math.random() * 15); //when ingredient isn't provided.
  //total:  15
  //tequila, vodka, gin, brandy, bourbon, cognac, cider, vermouth
  //wine, scotch, campari, sherry, beer, champagne, blue_curacao
  if (strIngredient1 == "random" || strIngredient1 == "") {
    if (random_num == 0)
     strIngredient1[0] = "tequila"
    else if (random_num == 1)
      strIngredient1[0] = "blue_curacao"
    else if (random_num == 2)
      strIngredient1[0] = "vodka"
    else if (random_num == 3)
      strIngredient1[0] = "gin"
    else if (random_num == 4)
      strIngredient1[0] = "brandy"
    else if (random_num == 5)
      strIngredient1[0] = "bourbon"
    else if (random_num == 6)
      strIngredient1[0] = "cognac"
    else if (random_num == 7)
      strIngredient1[0] = "cider"
    else if (random_num == 8)
      strIngredient1[0] = "vermouth"
    else if (random_num == 9)
      strIngredient1[0] = "wine"
    else if (random_num == 10)
      strIngredient1[0] = "scotch"
    else if (random_num == 11)
      strIngredient1[0] = "campari"
    else if (random_num == 12)
      strIngredient1[0] = "sherry"
    else if (random_num == 13)
      strIngredient1[0] = "beer"
    else if (random_num == 14)
      strIngredient1[0] = "champagne"  
  }

 
  for (var i = 0; i < arguments[0].length; i++) {
    var tmpResults = http.getUrl(encodeURI(apiUrl + arguments[0][i]))
    if (tmpResults)
      tmpResults = JSON.parse(tmpResults)
    console.log(arguments[0][i])
    if (typeof(results[0]) == 'undefined') {
      for (id in tmpResults.drinks) {
        results.push(tmpResults.drinks[id])
      }
    } else {
      var newResults = []
      for (id in tmpResults.drinks) {
        var found = 0
        for (var i = 0; i < results.length; i++) {
          if (results[i].strDrink == tmpResults.drinks[id].strDrink) {
            found += 1
          }
        }
        if (found) {
          newResults.push(tmpResults.drinks[id])
        }
      }
      results = newResults;
    }
  }
  return results
}
