var React = require("react");

var Signets = React.createClass({
   render() {    
    return (
        <ul >
            {
              this.props.data 
              ? this.props.data.map((function(signet) {
                  return <li key={signet.id} onClick={this.signetSelected}>{signet.id}</li>
              }).bind(this))
              : ""
            }
        </ul>
    );
  },
  signetSelected(event, dataReactId){}
});

module.exports = Signets;