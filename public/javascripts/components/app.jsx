var React = require("react"),
    Search = require("./search"),
    Feeders = require("./feeders");

var App = React.createClass({
  render() {
    return (
        <div>
          <Search />
          <Feeders/>
        </div>
    );
  }
});

module.exports = App;