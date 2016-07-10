var React = require('react');
var PokemonType = require('./PokemonType');
var ItemDetail = require('./ItemDetail');
var ItemHeader = require('./ItemHeader');
var ItemImg = require('./ItemImg');
const PokemonItem = React.createClass({


  render () {
    const {
      id,
      img,
      name,
      types,
      height,
      weight
    } = this.props;

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

    if (this.props.id !== 0) {
      return (
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" style={itemConatiner} >
          <div className="panel panel-success" data-toggle="modal" data-target="#myModal">
            <div className="panel-heading" >
              <ItemHeader id={this.props.id} name={this.props.name} img={this.props.img}/>
            </div>
            <div className="panel-body">
              <ItemImg img={this.props.img}/>
              <div>{pokemonTypes}</div>
            </div>
          </div>

          <ItemDetail
            id="myModal"
            key={id}
            id={id}
            img={img}
            name={name}
            types={types}
            height={height}
            weight={weight}
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
