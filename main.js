var poke = function() {
  var pokeables = $('#content a:contains("Poke Back")');

  if (pokeables.length > 0) {
    for (var i = 0, max = pokeables.length; i < max; i++) {
      pokeables[i].click();
    }
  }
}

var reload = function() {
  location.reload();
}

setInterval(poke, 5000);
setInterval(reload, 25000);
