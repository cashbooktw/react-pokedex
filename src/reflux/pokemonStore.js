let HTTP = require('../services/fetch');
let Reflux = require('reflux');
var Actions = require('./actions');

let PokemonStore = Reflux.createStore({
  listenables: [Actions],
  getPokemons: function() {
    this.pokemons = [];
    var pokemonBaseUrl = "http://pokeapi.co/api/v2/pokemon";
    var artworkBaseUrl = "http://img.pokemondb.net/artwork/";
    var p1 = new Promise(function(resolve, reject) {
      resolve();
    });

    for (let j = 1; j < 10; j++) {
      p1.then(
        function() {
          HTTP.get(pokemonBaseUrl + "/" + j).then(function(json) {

            var rObj = {};
            rObj.id = json.id;
            rObj.name = json.name;
            rObj.img = artworkBaseUrl + json.name + ".jpg";
            rObj.types = [];
            for (var k of json.types) {
              rObj.types.push(k.type.name);
            }
            rObj.height = json.height;
            rObj.weight = json.weight

            this.pokemons.push(rObj);
            this.trigger('change', this.pokemons);
          }.bind(this));
        }.bind(this)
      );
    }
  }
});

module.exports = PokemonStore;
