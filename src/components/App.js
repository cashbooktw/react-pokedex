var React = require('react');
var Reflux = require('reflux');
var Actions = require('../reflux/actions');
var PokemonStore = require('../reflux/pokemonStore');
var PokemonList = require('./PokemonList');
var SortDropdown = require('./SortDropdown');

var Pokedex = React.createClass({
  getInitialState: function() {
    return {
      "sortMethod": "sortByID"
    };
  },
  render: function() {
    return (
      <div>
        <SortDropdown onChangeMethod={
          (method) => this.setState({
            "sortMethod": method
          })
        }/>
        <PokemonList sortMethod={this.state.sortMethod} />
      </div>
    );
  }
});

module.exports = Pokedex;
