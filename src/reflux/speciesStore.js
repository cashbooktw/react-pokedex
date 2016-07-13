let HTTP = require('../services/fetch');
let Reflux = require('reflux');
var Actions = require('./actions');

let PokemonStore = Reflux.createStore({
  listenables: [Actions],
  getSpecies: function(name) {
    this.species = [];
    var speciesUrl = "http://pokeapi.co/api/v2/pokemon-species/";
    var species = HTTP.get(speciesUrl + name).then(function(json) {
      var rObj = {};

      rObj.name = name.substring(0,1).toUpperCase() +
                        name.substring(1,name.length);

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
      this.species.push(rObj);
    this.trigger('change', this.species);
  }.bind(this));

  }

});

module.exports = PokemonStore;
