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
      <div className="col-lg-6">
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
