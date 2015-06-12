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
  getInitialState() {
    console.log("1");
    console.log(this.props);
    if (!this.props.feeders)
        this.props.feeders = feeders;
    return {feeders: this.props.feeders};
  },
  render() {
     console.log("2");
    console.log(this.props);
    return (
        <div>
          <Search />
          <Feeders data={this.state.feeders}/>          
        </div>
    );
  }
});

module.exports = App;