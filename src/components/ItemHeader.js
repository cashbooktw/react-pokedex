var React = require('react');

var ItemHeader = React.createClass({

  render: function() {
    var indexStyle = {
      float: "left"
    };
    var nameStyle = {
      float: "right"
    };
    return (
      <div className="middle-title">
        &nbsp;
        <span style={indexStyle}>No.{this.props.id}</span>
        <span style={nameStyle}>{this.props.name}</span>
      </div>
    );
  }

});

module.exports = ItemHeader;
