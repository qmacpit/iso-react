var React = require("react"),    
    Toolbox = require("../toolbox"),
    Signets = require("./signets"),
    Feeders = require("./feeders");

var App = React.createClass({
  getInitialState() {
    
    if (Toolbox.isBrowser()) {            
      window.onpopstate = this.onPopState;
      this.props.feeders = dataCache.feeders;
      this.props.signets = dataCache.signets;      
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
    var me = this;
    $.getJSON("/REST/" + feederId + "/signets")
    .then(function(signets){      
      me.setState({
        "signets": signets
      });
      history.pushState({
        feederId: feederId
      }, null, feederId);
    })
  },
  render() {
    return (
        <div>          
          <Feeders data={this.state.feeders} parent={this}/>          
          <Signets data={this.state.signets} />
        </div>
    );
  }
});

module.exports = App;