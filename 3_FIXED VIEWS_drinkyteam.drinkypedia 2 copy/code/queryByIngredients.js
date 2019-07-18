var http = require('http')
var console = require('console')
var test = require('./concatIngredients')

// Takes n string arguments for ingredients, returns array.

module.exports.function = function queryByIngredients (strIngredient1) {
  var apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i='
  var results = []
  for (var i = 0; i < arguments[0].length; i++) {
    var tmpResults = http.getUrl(encodeURI(apiUrl + arguments[0][i]))
    tmpResults = JSON.parse(tmpResults)
    // console.log(tmpResults)
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
