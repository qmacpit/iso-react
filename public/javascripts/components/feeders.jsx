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
  feederSelected(event, x, y) {
    console.log("feederSelected");
    console.log(event.target);
    console.log(x);
    console.log(y);
  }
});

module.exports = Feeders;