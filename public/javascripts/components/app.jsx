var React = require("react"),
    Search = require("./search"),
    Signets = require("./signets"),
    Feeders = require("./feeders");

var App = React.createClass({
  getInitialState() {

    console.log("1");
    console.log(this.props);
    
    if (typeof window !== "undefined") {      
      var me = this;
      window.onpopstate = function(data){
        console.log("onpopstate")
        console.log(data)
        if (data.state) {
          me.loadSignets(data.state.feederId);
        }
      }

      if (typeof dataCache !== undefined) {
        this.props.feeders = dataCache.feeders;
        this.props.signets = dataCache.signets;
      }
             
    }

    return {
      feeders: this.props.feeders,
      signets: this.props.signets
    };      
  },
  loadSignets: function(feederId){
    console.log("loading signets: " + feederId)
    var me = this;
    $.getJSON("/REST/" + feederId + "/signets")
    .then(function(signets){
      console.log(signets);
      me.setState({
        "signets": signets
      });
      history.pushState({
        feederId: feederId
      }, null, feederId);
    })
  },
  render() {

    console.log("2");
    console.log(this.props);

    return (
        <div>
          <Search />
          <Feeders data={this.state.feeders} parent={this}/>          
          <Signets data={this.state.signets} />
        </div>
    );
  }
});

module.exports = App;