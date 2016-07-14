var React = require('react');

var Footer = React.createClass({

  render: function() {

    // style
    var footerText = {
      float: "right",
      paddingTop: 15
    };


    return (
      <div className="navbar navbar-default navbar-fixed-bottom">
        <div className="container">
          <p style={footerText}>Made by <a href="https://github.com/cashbooktw">cashbook</a> &copy; 2016</p>
        </div>
      </div>
    );
  }

});

module.exports = Footer;
