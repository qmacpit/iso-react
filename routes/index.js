var express = require('express');
var router = express.Router();

require("node-jsx").install({
    harmony: true, 
    extension: ".jsx"
});

var React = require("react"),
    App = React.createFactory(require("../public/javascripts/components/app"));

var feeders = [
    {
        id: "F1"
    },
    {
        id: "F2"
    }
]
/* GET home page. */
router.get('/', function(req, res) {

  var markup = React.renderToString(
        App({    
            feeders: feeders
        })
    );      

  res.render('index', { 
    title: 'Express',
    markup: markup ,
    dataCache: JSON.stringify({
        feeders: feeders
    })
  });
});

module.exports = router;
