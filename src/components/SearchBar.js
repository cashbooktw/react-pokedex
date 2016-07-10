var React = require('react');

var SearchBar = React.createClass({
  getInitialState: function() {
    return {
      "newText": ""
    };
  },
  onClick: function() {
    this.props.onFilter(this.state.newText);
  },
  onInputChange: function(e){
    this.setState({newText: e.target.value});
  },
  render: function() {
    return (
      <div className="col-md-3 col-sm-4 col-xs-6 col-md-offset-7 col-sm-offset-6 col-xs-offset-3 searchbar">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Search for..." onChange={this.onInputChange} />
          <span className="input-group-btn">
            <button className="btn btn-default" type="button" onClick={this.onClick}>Go!</button>
          </span>
        </div>
      </div>
    );
  }

});

module.exports = SearchBar;
