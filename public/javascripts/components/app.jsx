var React = require("react"),    
    Toolbox = require("../toolbox"),
    Signets = require("./signets"),
    Feeders = require("./feeders");

var App = React.createClass({
  getInitialState() {

    console.log("1");
    console.log(this.props);
    
    if (Toolbox.isBrowser()) {            
      window.onpopstate = this.onPopState.bind(this);

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
  onPopState: function(data){
    if (data.state)
      this.loadSignets(data.state.feederId);    
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
          <Feeders data={this.state.feeders} parent={this}/>          
          <Signets data={this.state.signets} />
        </div>
    );
  }
});

module.exports = App;