var React = require('react');
var Reflux = require('reflux');
var Actions = require('../reflux/actions');
var PokemonStore = require('../reflux/pokemonStore');
var PokemonItem = require('./PokemonItem');
var speciesStore = require('../reflux/speciesStore');

const PokemonList = React.createClass({
  mixins: [Reflux.listenTo(PokemonStore, 'onPokemonChange')
          //  Reflux.listenTo(speciesStore, 'onChange')
  ],
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
      // "species": []
    };
  },
  componentWillMount: function() {
    Actions.getPokemons();
    console.log("this.state.name = " + this.state.name);
    // if (this.state.name){
    //   Actions.getSpecies(this.props.name);
    // }
  },
  // componentDidMount: function() {
  //   console.log("componentDidMount");
  // },
  onPokemonChange: function(event, pokemons) {
    // console.log(...this.state.pokemons);
    this.setState({pokemons: pokemons});
  },
  // onChange: function(event, species) {
  //   this.setState({"species" : species});
  //   console.log(this.state.species);
  //   console.log(this.props.name);
  // },

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
      var upperCaseName = item.name;
      upperCaseName = item.name.substring(0,1).toUpperCase() +
                        item.name.substring(1,item.name.length);
      // console.log("upperCaseName = " + upperCaseName);
      // console.log("item.name = " + item.name);
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
