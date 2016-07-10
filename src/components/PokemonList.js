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
        id: 0,
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

    pokeSort(this.props.sortMethod);

    // var pokeFilter = function(filterCondition) {
    //   if (filterCondition.trim() !== "") {
    //
    //   }
    // }
    //
    // pokeSort(this.props.filterCondition);

    // var pokemonItems = this.state.pokemons.map((item) => {
    //   return (
    //     <PokemonItem
    //       key={item.id}
    //       id={item.id}
    //       img={item.img}
    //       name={item.name}
    //       types={item.types}
    //       /* height={item.height}
    //       weight={item.weight} */
    //     />
    //   )
    // });
    var isContainKeywords = function(item) {
      var regexp = new RegExp(this.props.filterCondition, "i");
      return (regexp.test(item.id) || regexp.test(item.name));
    }.bind(this);

    var pokemonItems = this.state.pokemons.
    filter(isContainKeywords).
    map((item) => {
      item.name = item.name.substring(0,1).toUpperCase() +
                        item.name.substring(1,item.name.length);
      return (
        <PokemonItem
          key={item.id}
          id={item.id}
          img={item.img}
          name={item.name}
          types={item.types}
          height={item.height}
          weight={item.weight}
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
