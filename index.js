function dwarfRollCall(dwarves) {
  var dwarf = ""
  for (var i = 0; i < dwarves.length; i++) {
   dwarf += (i+1).toString()+ ". " + dwarves[i] + " ";
  }
  return dwarf;
}

function summonCaptainPlanet(planeteerCalls){
  var planeteer = [];
  for (var i = 0; i < planeteerCalls.length; i++) {
    planeteer.push(planeteerCalls[i].toUpperCase() + "!");
  }
  return planeteer
}

function longPlaneteerCalls(words) {
  var long = false
  for (var i = 0; i < words.length; i++){
    if (words[i].length > 4){
      long = true
    }
  }
  return long
}

function findTheCheese (foods) {
  var cheese = ["cheddar", "gouda", "camembert"]
  for (var i = 0; i < food.length; i++){
    for (var j = 0; j < cheese.length; j++){
      if (food[i]===cheese[j])
      return foods[i]
    }
  }
  return "NO CHEESE!"
}
