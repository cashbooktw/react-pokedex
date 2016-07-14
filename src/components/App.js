var React = require('react');
var Reflux = require('reflux');
var Actions = require('../reflux/actions');
var PokemonStore = require('../reflux/pokemonStore');
var PokemonList = require('./PokemonList');
var SortDropdown = require('./SortDropdown');
var SearchBar = require('./SearchBar');
var PageHeader = require('./PageHeader');
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
        <PageHeader title="Pokemon Index"></PageHeader>

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
      </div>
    );
  }
});

module.exports = Pokedex;
