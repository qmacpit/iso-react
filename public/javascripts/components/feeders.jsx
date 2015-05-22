var React = require("react");

var Feeders = React.createClass({
  getInitialState: function() {
    console.log("1")
    return {data: [
        {
            id: "F1"
        },
        {
            id: "F2"
        }
    ]};
  },
  render() {
    return (
        <ul>
            {
                this.state.data.map(function(feeder) {
                    return <li key={feeder.id}>{feeder.id}</li>
                })
            }
        </ul>
    );
  },
  // changeSearch(event) {
  //   var text = event.target.value;

  //   this.setState({
  //     search: text
  //   });
  // }
});

module.exports = Feeders;