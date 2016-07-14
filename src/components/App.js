var React = require('react');
var Reflux = require('reflux');
var Actions = require('../reflux/actions');
var PokemonStore = require('../reflux/pokemonStore');
var PokemonList = require('./PokemonList');
var SortDropdown = require('./SortDropdown');
var SearchBar = require('./SearchBar');
var PageHeader = require('./PageHeader');
var Footer = require('./Footer');
var Pokedex = React.createClass({
  getInitialState: function() {
    return {
      "sortMethod": "sortByID",
      "filterCondition": ""
    };
  },
  render: function() {
    return (
      <div>
        {/*page header */}
        <PageHeader title="Pokémon Index"></PageHeader>

        {/* sort button */}
        <SortDropdown onChangeMethod={
            (method) => this.setState({
              "sortMethod": method
            })
          }
        />
        {/* sort input text field */}
        <SearchBar onFilter={
            (filterCondition) => this.setState({
              "filterCondition": filterCondition
            })
          }
        />
        {/* main content */}
        <PokemonList sortMethod={this.state.sortMethod} filterCondition={this.state.filterCondition}/>

        <Footer />
      </div>
    );
  }
});

module.exports = Pokedex;
