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
        id: "F11"
    },
    {
        id: "F22"
    }
]
/* GET home page. */
router.get('/', function(req, res) {

  var markup = React.renderToString(App({
    xxx: "xxxx",
    feeders: feeders}));      

  res.render('index', { 
    title: 'Express',
    markup: markup 
  });
});

module.exports = router;
