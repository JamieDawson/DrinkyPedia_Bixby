var http = require('http')
var console = require('console')

module.exports.function = function queryIngredientInfo (strIngredient1) {
  console.log("is it queryIngredientsinfojs")
  var apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?i='
  var results = []
  var tmpResults = http.getUrl(encodeURI(apiUrl + strIngredient1))
  tmpResults = JSON.parse(tmpResults)
  
  
  for (id in tmpResults.ingredients) {
    tmpResults.ingredients[id].strIngredient = tmpResults.ingredients[id].strIngredient.charAt(0).toUpperCase() + tmpResults.ingredients[id].strIngredient.substring(1)
    results.push(tmpResults.ingredients[id])
  }
  console.log(tmpResults.ingredients[id].strDescription)
  var x = 250
  if (tmpResults.ingredients[id].strDescription.length > x) {
    var answer = tmpResults.ingredients[id].strDescription.slice(0, x);
    var i = x;
    console.log(i)
    while (i != 0 && answer[i] != '.')
      i -= 1;
    console.log(i)
    answer = answer.slice(0, i)
  }
  // If the whole string got deleted because there was no prior period.
  // Copy the entire original answers
  if (!answer)
    answer = tmpResults.ingredients[id].strDescription;
  console.log(answer)
  results[0].speech = answer  
  return results
}
