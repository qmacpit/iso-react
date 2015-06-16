var React = require("react"),
    Toolbox = require("../toolbox");    

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
    this.props.parent.loadSignets(Toolbox.parseDataReactId(dataReactId));
  }
});

module.exports = Feeders;