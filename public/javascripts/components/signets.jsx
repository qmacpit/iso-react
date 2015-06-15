var React = require("react");

var Signets = React.createClass({
   render() {    
    return (
        <ul >
            {
              this.props.data 
              ? this.props.data.map((function(feeder) {
                  return <li key={feeder.id} onClick={this.signetSelected}>{feeder.id}</li>
              }).bind(this))
              : ""
            }
        </ul>
    );
  },
  setSignets: function(){
    console.log("setting signets")
  },
  signetSelected(event, dataReactId) {    
    // var feederId  = dataReactId.split("$")[1]
    // console.log(feederId);
    // this.props.parent.loadSignets(feederId);
  }
});

module.exports = Signets;