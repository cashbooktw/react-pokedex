var React = require('react');


var ItemImg = React.createClass({
  render: function() {
    var imgStyle = {
      background: 'white url("' + this.props.img + '") no-repeat center center',
      backgroundSize: "contain",
      borderRadius: 20,
      border: '2px solid #ccc',
      height: 200,
    };
    return (
      <div style={imgStyle}>

      </div>
    );
  }

});

module.exports = ItemImg;
