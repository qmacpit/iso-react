var express = require('express'),
    Data = require("../code/data.js");

require("node-jsx").install({
    harmony: true, 
    extension: ".jsx"
});

var React = require("react"),
    App = React.createFactory(require("../public/javascripts/components/app"));


function render(res, dataCacheObject){
    res.render('index', { 
            title: 'Express',
            markup: React.renderToString(App(dataCacheObject)),
            dataCache: JSON.stringify(dataCacheObject)
    });
}
module.exports = {
    main: function(req, res) {
        render(res, {    
                feeders: Data.getFeeders()
            });
    },
    feederSelected: function(req, res) {        
        render(res, {    
            feeders: Data.getFeeders(),
            signets: Data.getSignets(req.params.feederId),
        });
    }
};