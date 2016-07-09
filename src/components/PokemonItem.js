var React = require('react');
var PokemonType = require('./PokemonType');

const PokemonItem = React.createClass({
  render () {
    var pokemonTypes = this.props.types.map((item) => {
      return <PokemonType key={item} type={item} />;
    });

    var imgStyle = {
      background: 'white url("' + this.props.img + '") no-repeat center center',
      backgroundSize: "contain",
      borderRadius: 20,
      border: '2px solid #ccc',
      height: 200,

    };
    return (
      <div className="panel panel-default col-lg-3 col-md-4 col-sm-6 col-xs-12">
        <div className="panel-body">
          <div>{this.props.id}</div>
          <div>{this.props.name}</div>
          <div style={imgStyle}></div>
          <div>{pokemonTypes}</div>
          {/* <div>{this.props.weight}</div>
          <div>{this.props.height}</div> */}
        </div>
      </div>
    )
  }
})

module.exports = PokemonItem;
