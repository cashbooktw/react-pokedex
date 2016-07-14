let Fetch = require('whatwg-fetch');


let httpservice  = {
  get: function(url) {
    return fetch(url).then(function(response) {
      return response.json();
    });
  }
};

module.exports = httpservice;
