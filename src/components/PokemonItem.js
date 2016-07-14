var React = require('react');
var PokemonType = require('./PokemonType');
var ItemDetail = require('./ItemDetail');
var ItemHeader = require('./ItemHeader');
var ItemImg = require('./ItemImg');
var Reflux = require('reflux');
var Actions = require('../reflux/actions');
var speciesStore = require('../reflux/speciesStore');

const PokemonItem = React.createClass({
  render () {
    // style
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

    // take types from type array
    var pokemonTypes = this.props.types.map((item) => {
      return <PokemonType key={item} type={item} />;
    });

    // let react don't render with initial value
    if (this.props.index !== 0) {
      return (
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" style={itemConatiner} >
          <div className="panel panel-success" data-toggle="modal" data-target={"#" + this.props.name}>
            <div className="panel-heading" >
              <ItemHeader index={this.props.index} ucName={this.props.ucName} img={this.props.img}/>
            </div>
            <div className="panel-body">
              <ItemImg img={this.props.img}/>
              <div>{pokemonTypes}</div>
            </div>
          </div>

          <ItemDetail
            id={this.props.name}
            key={this.props.index}
            index={this.props.index}
            img={this.props.img}
            name={this.props.name}
            types={this.props.types}
            height={this.props.height}
            weight={this.props.weight}
            ucName={this.props.ucName}
            blurb={this.props.blurb}
            category={this.props.category}
            color={this.props.color}
            shape={this.props.shape}
            habitat={this.props.habitat}
            growthRate={this.props.growthRate}
            captureRate={this.props.captureRate}
          />

        </div>
      )
    } else {
      return <div></div>;
    }
  }
})

module.exports = PokemonItem;
