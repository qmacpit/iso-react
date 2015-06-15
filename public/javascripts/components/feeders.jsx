var React = require("react");

var Feeders = React.createClass({
   render() {    
    return (
        <ul >
            {
              this.props.data 
              ? this.props.data.map((function(feeder) {
                  return <li key={feeder.id} onClick={this.feederSelected}>{feeder.id}</li>
              }).bind(this))
              : ""
            }
        </ul>
    );
  },
  feederSelected(event, dataReactId) {    
    var feederId  = dataReactId.split("$")[1]
    console.log(feederId);
    this.props.parent.loadSignets(feederId);
  }
});

module.exports = Feeders;