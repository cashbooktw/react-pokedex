var React = require('react');
var Reflux = require('reflux');
var Actions = require('../reflux/actions');
var PokemonStore = require('../reflux/pokemonStore');
var PokemonItem = require('./PokemonItem');

const PokemonList = React.createClass({
  mixins: [Reflux.listenTo(PokemonStore, 'onChange')],
  getInitialState: function() {
    return {
      pokemons: [{
        key: 0,
        id: "id",
        name: "name",
        types: [],
        height: 0,
        weight: 0
      }]
    };
  },
  componentWillMount: function() {
    Actions.getPokemons();
  },
  onChange: function(event, pokemons) {
    // console.log(...this.state.pokemons);
    this.setState({pokemons: pokemons});
  },
  render () {
    var onSort = function(method) {
      switch(method) {
        case "sortByID":
          var sortByID = function(a, b) {
            return (a.id - b.id);
          }
          this.state.pokemons = this.state.pokemons.sort(sortByID);
          break;
        case "sortByReverseID":
          var sortByReverseID = function(a, b) {
            return (b.id - a.id);
          }
          this.state.pokemons = this.state.pokemons.sort(sortByReverseID);
          break;
        case "sortByNameAtoZ":
          var sortByNameAtoZ = function(a, b) {
            return (a.name > b.name);
          }
          this.state.pokemons = this.state.pokemons.sort(sortByNameAtoZ);
          break;
          break;
        case "sortByNameZtoA":
          var sortByNameZtoA = function(a, b) {
            return (b.name > a.name);
          }
          this.state.pokemons = this.state.pokemons.sort(sortByNameZtoA);
          break;
        default:
      }
    }.bind(this);

    onSort(this.props.sortMethod);
    var pokemonItems = this.state.pokemons.map((item) => {
      return (
        <PokemonItem
          key={item.id}
          id={item.id}
          img={item.img}
          name={item.name}
          types={item.types}
          /* height={item.height}
          weight={item.weight} */
        />
      )
    });

    return (
      <div>
        Basic descriptions.
        <div>{pokemonItems}</div>
      </div>
    )
  }
})

module.exports = PokemonList;
