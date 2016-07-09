var React = require('react');

const PokemonType = React.createClass({

  render () {
    var typeColor = {
      "normal": "#DDA078",
      "fire": "#BF2F3E",
      "water": "#78B4DD",
      "electric": "#DDD378",
      "grass": "#82DD78",
      "ice": "#78DDD3",
      "fighting": "#DD7882",
      "poison": "#A078DD",
      "ground": "#965325",
      "flying": "#D378DD",
      "psychic": "#6E651B",
      "bug": "#B4DD78",
      "rock": "#452611",
      "ghost": "#7882DD",
      "dragon": "#3C1B6E",
      "dark": "#1C0F07",
      "steel": "#B3A9A2",
      "fairy": "#78DDA0"
    };
    var pokemonTypeStyle = {
      backgroundColor: typeColor[this.props.type],
      fontSize: 16,
      marginRight: 5,
      float: "right"
    };
    return (
      <div className="label label-default" style={pokemonTypeStyle}>{this.props.type}</div>
    )
  }
})
module.exports = PokemonType;
