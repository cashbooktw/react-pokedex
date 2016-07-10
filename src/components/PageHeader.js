var React = require('react');
var PropTypes = React.PropTypes;

var PageHeader = React.createClass({

  render: function() {
    return (
      <div className="jumbotron mHeader">
        <h1 className="col-lg-offset-1">{this.props.title}</h1>
      </div>
    );
  }

});

module.exports = PageHeader;
