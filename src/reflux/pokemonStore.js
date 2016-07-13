let HTTP = require('../services/fetch');
let Reflux = require('reflux');
var Actions = require('./actions');

let PokemonStore = Reflux.createStore({
  // listenables: [Actions],
  // getPokemons: function() {
  //   this.pokemons = [];
  //   var pokemonBaseUrl = "http://pokeapi.co/api/v2/pokemon";
  //   var artworkBaseUrl = "http://img.pokemondb.net/artwork/";
  //   var p1 = new Promise(function(resolve, reject) {
  //     resolve();
  //   });
  //
  //   for (let j = 1; j < 4; j++) {
  //     p1.then(
  //       function() {
  //         HTTP.get(pokemonBaseUrl + "/" + j).then(function(json) {
  //
  //           var rObj = {};
  //           rObj.id = json.id;
  //           rObj.name = json.name;
  //           rObj.img = artworkBaseUrl + json.name + ".jpg";
  //           rObj.types = [];
  //           for (var k of json.types) {
  //             rObj.types.push(k.type.name);
  //           }
  //           rObj.height = json.height;
  //           rObj.weight = json.weight
  //
  //           this.pokemons.push(rObj);
  //           this.trigger('pokemonChange', this.pokemons);
  //         }.bind(this));
  //       }.bind(this)
  //     );
  //   }
  // }


  listenables: [Actions],
  getPokemons: function() {
    this.pokemons = [];
    this.species = [];
    var pokemonBaseUrl = "http://pokeapi.co/api/v2/pokemon";
    var artworkBaseUrl = "http://img.pokemondb.net/artwork/";
    var speciesUrl = "http://pokeapi.co/api/v2/pokemon-species/";
    // var p1 = new Promise(function(resolve, reject) {
    //   resolve();
    // });

    for (let j = 1; j < 4; j++) {
      // p1.then(
        // function() {
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

            // this.pokemons.push(rObj);
            // this.trigger('pokemonChange', this.pokemons);
            return rObj;
          }.bind(this)).then(function(rObj) {
             this.species = HTTP.get(speciesUrl + rObj.name).then(function(json) {
             var flavorTexts = json.flavor_text_entries.map(function(item) {
               return item.language.name == "en" ? item.flavor_text : "";
             });
             var arrayBlurb = [];
             for(var index in flavorTexts){
               if(!arrayBlurb.includes(flavorTexts[index])){
                 arrayBlurb.push(flavorTexts[index]);
               }
             };
             var blurb = arrayBlurb[0] + ' ' + arrayBlurb[1];
             rObj.blurb = blurb;
             this.pokemons.push(rObj);
             this.trigger('pokemonChange', this.pokemons);
            //  this.species.push(rObj);
          }.bind(this));
          }.bind(this));
        // }
      // );
    }
  }

  // getSpecies: function(name) {
  //
  //
  //     var species = HTTP.get(speciesUrl + name).then(function(json) {
  //     var rObj = {};
  //
  //     rObj.name = name.substring(0,1).toUpperCase() +
  //                       name.substring(1,name.length);
  //
  //     var flavorTexts = json.flavor_text_entries.map(function(item) {
  //       return item.language.name == "en" ? item.flavor_text : "";
  //     });
  //     var arrayBlurb = [];
  //     for(var index in flavorTexts){
  //       if(!arrayBlurb.includes(flavorTexts[index])){
  //         arrayBlurb.push(flavorTexts[index]);
  //       }
  //     };
  //     var blurb = arrayBlurb[0] + ' ' + arrayBlurb[1];
  //     rObj.blurb = blurb;
  //     this.species.push(rObj);
  //   this.trigger('change', this.species);
  // }.bind(this));
  //
  // }


});

module.exports = PokemonStore;
