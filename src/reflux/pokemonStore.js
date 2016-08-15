let HTTP = require('../services/fetch');
let Reflux = require('reflux');
var Actions = require('./actions');

let PokemonStore = Reflux.createStore({

  listenables: [Actions],
  // getPokemons: function() {
  //   this.pokemons = [];
  //   this.species = [];
  //   var pokemonBaseUrl = "https://pokeapi.co/api/v2/pokemon";
  //   var artworkBaseUrl = "https://img.pokemondb.net/artwork/";
  //   var speciesUrl = "https://pokeapi.co/api/v2/pokemon-species/";
  //
  //   // j is the index of pokemon
  //   for (let j = 1; j < 50; j++) {
  //     // use index to get basic information, includes name
  //     HTTP.get(pokemonBaseUrl + "/" + j).then(function(json) {
  //
  //       var rObj = {};
  //       rObj.id = json.id;
  //       rObj.name = json.name;
  //       rObj.img = artworkBaseUrl + json.name + ".jpg";
  //       rObj.types = [];
  //       for (var k of json.types) {
  //         rObj.types.push(k.type.name);
  //       }
  //       rObj.height = json.height;
  //       rObj.weight = json.weight
  //
  //       return rObj;
  //     }.bind(this)).then(function(rObj) {
  //       // use name to get more detail information
  //       this.species = HTTP.get(speciesUrl + rObj.name).then(function(json) {
  //         // take the description from array
  //         var flavorTexts = json.flavor_text_entries.map(function(item) {
  //           return item.language.name == "en" ? item.flavor_text : "";
  //         });
  //         var arrayBlurb = [];
  //         for(var index in flavorTexts){
  //          if(!arrayBlurb.includes(flavorTexts[index])){
  //            arrayBlurb.push(flavorTexts[index]);
  //          }
  //         };
  //         var blurb = arrayBlurb[0] + ' ' + arrayBlurb[1];
  //         rObj.blurb = blurb;
  //
  //         // return "N/A" if there is no value
  //         var isIt = function(thing){
  //           return thing ? thing.name : "N/A";
  //         };
  //
  //         rObj.category = json.genera[0].genus;
  //         rObj.color = isIt(json.color);
  //         rObj.shape = isIt(json.shape);
  //         rObj.habitat = isIt(json.habitat);
  //         rObj.growthRate = isIt(json.growth_rate);
  //         rObj.captureRate = json.capture_rate;
  //
  //         this.pokemons.push(rObj);
  //         this.trigger('pokemonChange', this.pokemons);
  //       }.bind(this));
  //     }.bind(this));
  //   }
  // }
  getPokemons: function() {
    HTTP.get("./data.json").then(function(json) {
      this.trigger('pokemonChange', json);
    }.bind(this));
  }
});

module.exports = PokemonStore;
