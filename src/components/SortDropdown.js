var React = require('react');

var SortDropdown = React.createClass({
  getInitialState: function() {
    return {
      "method": "sortByID"
    };
  },
  onClick: function(method) {
    this.state.method = method;
    const onChangeMethod = this.props.onChangeMethod;
    onChangeMethod(method);
  },
  render: function() {
    var btnValue = {
      "sortByID": "ID",
      "sortByReverseID": "Reverse ID",
      "sortByNameAtoZ": "Name A-Z",
      "sortByNameZtoA": "Name Z-A"
    }
    return (
      <div className="col-lg-6">Sort By
        <div className="btn-group">
          <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {btnValue[this.state.method]}  <span className="caret"></span>
          </button>
          <ul className="dropdown-menu">
            <li onClick={this.onClick.bind(this, "sortByID")}><a href="#">ID</a></li>
            <li onClick={this.onClick.bind(this, "sortByReverseID")}><a href="#">Reverse ID</a></li>
            <li onClick={this.onClick.bind(this, "sortByNameAtoZ")}><a href="#">Name A-Z</a></li>
            <li onClick={this.onClick.bind(this, "sortByNameZtoA")}><a href="#">Name Z-A</a></li>
            {/*<li role="separator" className="divider"></li>
            <li><a href="#">Separated link</a></li>
            onClick={this.onClick("sortByReverseID")}
            */}
          </ul>
        </div>
      </div>
    );
  }

});

module.exports = SortDropdown;
