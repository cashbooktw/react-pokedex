var React = require('react');
var ItemHeader = require('./ItemHeader');
var ItemImg = require('./ItemImg');
var Reflux = require('reflux');
var Actions = require('../reflux/actions');
var speciesStore = require('../reflux/speciesStore');
var ItemDetail = React.createClass({
  // mixins: [Reflux.listenTo(speciesStore, 'onChange')],
  // getInitialState: function() {
  //   return {
  //     "species": ""
  //   };
  // },
  // onChange: function(event, species) {
  //   this.setState({"species" : species});
  // },
  // componentWillMount: function() {
  //   Actions.getSpecies(this.props.ucName);
  // },
  render: function() {

    // style
    var closeBtnStyle = {
      marginLeft: 10
    };

    // blurb
    // var pokemonBlurb = "";
    // var blurb = (this.state.species.filter((item) => {
    //   return (item.name === this.props.name);
    // }));
    // if(blurb[0]) {
    //       pokemonBlurb = blurb[0].blurb;
    // }
    //
    // var pokemonGenera = "";
    // var genera = (this.state.species.filter((item) => {
    //   return (item.name === this.props.name);
    // }));
    // console.log(genera);
    // if(genera[0]) {
    //       pokemonGenera = genera[0].genus;
    // }



    return (
      <div className="modal fade" tabIndex="-1" role="dialog" id={this.props.name}>
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" style={closeBtnStyle}><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title">
                <ItemHeader index={this.props.index} ucName={this.props.ucName} />
              </h4>
            </div>
            <div className="modal-body">
              <ItemImg className="col-xs-3" img={this.props.img}/>
              <div>{this.props.height}</div>
              <div>{this.props.weight}</div>
              <div>{this.props.ucName}</div>
              <div>{this.props.blurb}</div>
              {/*<div>{pokemonGenera}</div>
              <div>{pokemonBlurb}</div>*/}
            </div>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = ItemDetail;
