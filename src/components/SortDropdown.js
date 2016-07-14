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
      "sortByID": "Sort By ID",
      "sortByReverseID": "Sort By Reverse ID",
      "sortByNameAtoZ": "Sort By Name A-Z",
      "sortByNameZtoA": "Sort By Name Z-A"
    }
    return (
      <div className="col-md-2 col-xs-4 col-sm-offset-10 col-xs-offset-9 sortdropdown">
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-default dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false">

            {btnValue[this.state.method]}  <span className="caret"></span>
        </button>

          <ul className="dropdown-menu">
            <li onClick={this.onClick.bind(this, "sortByID")}>Sort By ID</li>
            <li onClick={this.onClick.bind(this, "sortByReverseID")}>Sort By Reverse ID</li>
            <li onClick={this.onClick.bind(this, "sortByNameAtoZ")}>Sort By Name A-Z</li>
            <li onClick={this.onClick.bind(this, "sortByNameZtoA")}>Sort By Name Z-A</li>
          </ul>
        </div>
      </div>
    );
  }

});

module.exports = SortDropdown;
