var React = require("react"),
    Search = require("./search"),
    Feeders = require("./feeders");

// var feeders = [
//     {
//         id: "F111"
//     },
//     {
//         id: "F222"
//     }
// ]

var App = React.createClass({
  getInitialState() {
    console.log("1");
    console.log(this.props);
    
    if (typeof window !== "undefined") {      
      if (typeof dataCache !== undefined)
       this.props.feeders = dataCache.feeders;
    }

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