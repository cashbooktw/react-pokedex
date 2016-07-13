var React = require('react');
var PokemonType = require('./PokemonType');
var ItemDetail = require('./ItemDetail');
var ItemHeader = require('./ItemHeader');
var ItemImg = require('./ItemImg');
var Reflux = require('reflux');
var Actions = require('../reflux/actions');
var speciesStore = require('../reflux/speciesStore');

const PokemonItem = React.createClass({
  // mixins: [Reflux.listenTo(speciesStore, 'onChange')],
  // getInitialState: function() {
  //   return {
  //     "species": []
  //   };
  // },
  // onChange: function(event, species) {
  //   this.setState({"species" : species});
  //   console.log(this.state.species);
  //   console.log(this.props.name);
  // },
  // componentWillMount: function() {
  //   if (this.props.name){
  //     Actions.getSpecies(this.props.name);
  //   }
  // },

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
          />

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
