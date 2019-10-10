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
  for (var i = 0; i < long.length; i++){
    if (word[i].legth > 4){
      long = true
    }
  }
  return long
}

function findTheCheese (foods) {
}
