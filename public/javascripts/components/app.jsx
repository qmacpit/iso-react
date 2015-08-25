var React = require("react"),
    Search = require("./search"),
    Feeders = require("./feeders");

var App = React.createClass({
  getInitialState() {
    
    if (typeof window !== "undefined") {      
      if (typeof dataCache !== undefined)
       this.props.feeders = dataCache.feeders;
    }

    return {
      feeders: this.props.feeders
    };
  },
  render() {
    return (
        <div>          
          <Search />
          <Feeders data={this.state.feeders}/>          
        </div>
    );
  }
});

module.exports = App;