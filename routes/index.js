var express = require('express');

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

module.exports = function(req, res) {

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
};
