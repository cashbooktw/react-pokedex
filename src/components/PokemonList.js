var React = require('react');
var Reflux = require('reflux');
var Actions = require('../reflux/actions');
var PokemonStore = require('../reflux/pokemonStore');
var PokemonItem = require('./PokemonItem');

const PokemonList = React.createClass({
  mixins: [Reflux.listenTo(PokemonStore, 'onPokemonChange')],
  getInitialState: function() {
    return {
      pokemons: [{
        key: 0,
        id: 0,
        name: "",
        types: [],
        height: 0,
        weight: 0
      }]
    };
  },
  componentWillMount: function() {
    Actions.getPokemons();
  },
  onPokemonChange: function(event, pokemons) {
    this.setState({pokemons: pokemons});
  },

  render () {

    // rearrange content by sorting with select method and input keywords
    var pokeSort = function(method) {
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
            if (a.name > b.name) {
              return 1;
            } else if (a.name < b.name){
              return -1;
            } else {
              return 0;
            }
          }
          this.state.pokemons = this.state.pokemons.sort(sortByNameAtoZ);
          break;
        case "sortByNameZtoA":
          var sortByNameZtoA = function(a, b) {
            if (a.name < b.name) {
              return 1;
            } else if (a.name > b.name){
              return -1;
            } else {
              return 0;
            }
          }
          this.state.pokemons = this.state.pokemons.sort(sortByNameZtoA);
          break;
        default:
      }
    }.bind(this);

    pokeSort(this.props.sortMethod);

    var isContainKeywords = function(item) {
      var regexp = new RegExp(this.props.filterCondition, "i");
      return (regexp.test(item.id) || regexp.test(item.name));
    }.bind(this);

    var pokemonItems = this.state.pokemons.
    filter(isContainKeywords).
    map((item) => {
      // turn first char into uppercase
      var upperCaseName = item.name;
      upperCaseName = item.name.substring(0,1).toUpperCase() +
                        item.name.substring(1,item.name.length);


      return (
        <PokemonItem
          key={item.id}
          index={item.id}
          img={item.img}
          name={item.name}
          types={item.types}
          height={item.height}
          weight={item.weight}
          ucName={upperCaseName}
          blurb={item.blurb}
          category={item.category}
          color={item.color}
          shape={item.shape}
          habitat={item.habitat}
          growthRate={item.growthRate}
          captureRate={item.captureRate}
          />
      )
    });

    return (
      <div className="mainContent">
        <div>{pokemonItems}</div>
      </div>
    )
  }
})

module.exports = PokemonList;
