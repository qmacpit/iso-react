var React = require("react"),
    Search = require("./search"),
    Feeders = require("./feeders");

var feeders = [
    {
        id: "F1"
    },
    {
        id: "F2"
    }
]

var App = React.createClass({
  render() {
    return (
        <div>
          <Search />
          <Feeders data={feeders}/>          
        </div>
    );
  }
});

module.exports = App;