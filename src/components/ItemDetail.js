var React = require('react');
var ItemHeader = require('./ItemHeader');
var ItemImg = require('./ItemImg');
var Reflux = require('reflux');
var Actions = require('../reflux/actions');
var ItemDetail = React.createClass({
  render: function() {

    // style
    // make btn stay away from pokemon name
    var closeBtnStyle = {
      marginLeft: 10
    };

    return (
      // the dialog id is passed by pokemon item, and bind with it
      <div className="modal fade" tabIndex="-1" role="dialog" id={this.props.name}>
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header modal-header-success">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" style={closeBtnStyle}><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title">
                <ItemHeader index={this.props.index} ucName={this.props.ucName} />
              </h4>
            </div>
            <div className="modal-body middle-content">
              <div className="row">
                <div className="col-md-6 col-xs-12"><ItemImg img={this.props.img}/></div>
                <div className="col-md-6 col-xs-12">
                  <table className="table table-striped">
                    <tbody>
                    <tr><td>Height:</td><td>{this.props.height}</td></tr>
                    <tr><td>Weight:</td><td>{this.props.weight}</td></tr>
                    <tr><td>Category:</td><td>{this.props.category}</td></tr>
                    <tr><td>Color:</td><td>{this.props.color}</td></tr>
                    <tr><td>Shape:</td><td>{this.props.shape}</td></tr>
                    <tr><td>Habitat:</td><td>{this.props.habitat}</td></tr>
                    <tr><td>Growth Rate:</td><td>{this.props.growthRate}</td></tr>
                    <tr><td>Capture Rate:</td><td>{this.props.captureRate}</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="row panel panel-success">
                <div className="panel-heading col-xs-12">Description: </div>
                <div className="panel-body col-xs-12">{this.props.blurb}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = ItemDetail;
