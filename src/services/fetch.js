let Fetch = require('whatwg-fetch');
// let baseUrl = "http://pokeapi.co/api/v2/pokemon";

let httpservice  = {
  get: function(url) {
    return fetch(url).then(function(response) {
      return response.json();
    });
  }
};

module.exports = httpservice;
