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

    var indexStyle = {
      float: "left"
    };
    var nameStyle = {
      float: "right"
    };

    var itemConatiner = {
      padding: 5,
    };
    var panelColor = {
      backgroundColor: "#DD7882"
    };
    if (this.props.id !== 0) {
      this.props.name = this.props.name.substring(0,1).toUpperCase() +
                        this.props.name.substring(1,this.props.name.length);

      return (
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" style={itemConatiner}>
          <div className="panel panel-default">
            <div className="panel-heading middle-title"  style={panelColor} >
              &nbsp;
              <span style={indexStyle}>{this.props.id}</span>
              <span style={nameStyle}>{this.props.name}</span>
            </div>
            <div className="panel-body">
              {/*<div>{this.props.id}</div>
              <div>{this.props.name}</div>*/}
              <div style={imgStyle}></div>
              <div>{pokemonTypes}</div>
              {/* <div>{this.props.weight}</div>
              <div>{this.props.height}</div> */}
            </div>
          </div>
        </div>
      )
    } else {
      return <div></div>;
    }
    {/*return (
      <div className="panel panel-default col-lg-3 col-md-4 col-sm-6 col-xs-12">
        <div className="panel-heading"><span className="badge">{this.props.id}</span>{this.props.name}</div>
        <div className="panel-body">
          <div style={imgStyle}></div>
          <div>{pokemonTypes}</div>
        </div>
      </div>
    )*/}
  }
})

module.exports = PokemonItem;
