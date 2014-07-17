var poke = function(){
  var pokeables = $('#content a:contains("Poke Back")');

  if (pokeables.length > 0) {
    console.log("Look, people to poke back!");
    for (var i = 0, max = pokeables.length; i < max; i++) {
      console.log("Pokesables #" + i);
      pokeables[i].click();
    }
  } else {
    console.log("Nobody to poke back!");
  }
}

setInterval(poke, 5000);
