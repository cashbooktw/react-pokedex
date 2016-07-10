var React = require('react');
var ItemHeader = require('./ItemHeader');
var ItemImg = require('./ItemImg');
var HTTP = require('../services/fetch');
var ItemDetail = React.createClass({
  // <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
  //   Launch demo modal
  // </button>
  // <div className="modal fade" tabIndex="-1" role="dialog" id="myModal">
  //   <div className="modal-dialog">
  //     <div className="modal-content">
  //       <div className="modal-header">
  //         <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
  //         <h4 className="modal-title">Modal title</h4>
  //       </div>
  //       <div className="modal-body">
  //         <p>One fine body&hellip;</p>
  //       </div>
  //       <div className="modal-footer">
  //         <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
  //         <button type="button" className="btn btn-primary">Save changes</button>
  //       </div>
  //     </div>
  //   </div>
  // </div>
  render: function() {
    var closeBtnStyle = {
      marginLeft: 10
    }
    var species = HTTP.get
    return (
      <div className="modal fade" tabIndex="-1" role="dialog" id="myModal">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" style={closeBtnStyle}><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title">
                <ItemHeader id={this.props.id} name={this.props.name} />
              </h4>
            </div>
            <div className="modal-body">
              <ItemImg className="col-xs-3" img={this.props.img}/>
            </div>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = ItemDetail;
