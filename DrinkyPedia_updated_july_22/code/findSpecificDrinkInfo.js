var console = require('console')
var http = require('http')

module.exports.function = function findSpecificDrinkInfo (Drink) {
  var url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

  var results = []
  var tmpResults = http.getUrl(encodeURI(url + Drink.idDrink))
  tmpResults = JSON.parse(tmpResults)
  Drink = tmpResults
  for (id in tmpResults.drinks) {
        results.push(tmpResults.drinks[id])
   }
  return results
}
