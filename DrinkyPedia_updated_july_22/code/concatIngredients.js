module.exports.function = function concatIngredients (drink) {
  var ret = []
  
  for (var i = 0; i < 15; i++) {
    if (typeof(drink["strIngredient" + i]) != undefined && drink["strIngredient" + i] != null) {
      ret.push(drink["strMeasure" + i] + drink["strIngredient" + i])
    }
  }
  return (ret)
}