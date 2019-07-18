var http = require('http')
var console = require('console')
var test = require('./concatIngredients')

module.exports.function = function findDrinkByName (strDrink) {
  var apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
  var results = []
  console.log("hhhh")
   //for (var i = 0; i < arguments[0].length; i++) {
    var tmpResults = http.getUrl(encodeURI(apiUrl + strDrink))
    tmpResults = JSON.parse(tmpResults)
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
 // }

  return results
}