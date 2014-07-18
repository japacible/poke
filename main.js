var poke = function() {
  var pokeables = $('#content a:contains("Poke Back")');

  if (pokeables.length > 0) {
    console.log("Look, people to poke back!");
    for (var i = 0, max = pokeables.length; i < max; i++) {
      console.log("Pokeables #" + i);
      pokeables[i].click();
    }
  } else {
    console.log("Nobody to poke back!");
  }
}

var reload = function() {
  console.log("Ctrl + R");
  location.reload();
}

setInterval(poke, 5000);
setInterval(reload, 25000);
