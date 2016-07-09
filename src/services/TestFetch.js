let React = require('react');
let ReactDOM = require('react-dom');
let Fetch = require('whatwg-fetch');

class TestFetch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: "XHX"
    };
  }
  componentDidMount() {
    fetch('http://pokeapi.co/api/v2/pokemon/1/')
        .then(function(res) {
            return res.json();
        }).then(function(json) {
            this.setState({temp: json.name});
            // console.log(json.login);
        }.bind(this));
    this.setState({temp: "TXT"});
  }
  render() {
    return(
      <div>{this.state.temp}</div>
    );
  }
}

// let httpservice  = {
//   fetch('http://pokeapi.co/api/v2/pokemon/1/')
//     .then(function(response) {
//       return response.json()
//     }).then(function(json) {
//       console.log('parsed json', json)
//     }).catch(function(ex) {
//       console.log('parsing failed', ex)
//     });
// };



module.exports = TestFetch;
