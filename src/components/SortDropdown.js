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
            <li onClick={this.onClick.bind(this, "sortByID")}><a href="#">Sort By ID</a></li>
            <li onClick={this.onClick.bind(this, "sortByReverseID")}><a href="#">Sort By Reverse ID</a></li>
            <li onClick={this.onClick.bind(this, "sortByNameAtoZ")}><a href="#">Sort By Name A-Z</a></li>
            <li onClick={this.onClick.bind(this, "sortByNameZtoA")}><a href="#">Sort By Name Z-A</a></li>
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
