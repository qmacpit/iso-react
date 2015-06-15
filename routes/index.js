var express = require('express'),
    Data = require("../code/data.js");

require("node-jsx").install({
    harmony: true, 
    extension: ".jsx"
});

var React = require("react"),
    App = React.createFactory(require("../public/javascripts/components/app"));

module.exports = {
    main: function(req, res) {

        var feeders = Data.getFeeders(),
            markup = React.renderToString(
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
    },
    feederSelected: function(req, res) {

        var feeders = Data.getFeeders(),
            signets = Data.getSignets(req.params.feederId),
            markup = React.renderToString(
                App({    
                    feeders: feeders,
                    signets: signets
                })
            );      

        res.render('index', { 
            title: 'Express',
            markup: markup ,
            dataCache: JSON.stringify({
                feeders: feeders,
                signets: signets
            })
        });
    }
};