var index = require('./routes/index'),
    Data = require("./core/data");

module.exports = function(app){

    app.get('/', index.main);

    app.get("/:feederId", index.feederSelected);

    app.get("/:feederId/:signetId", function(req,res){
        res.send("signets").end();
    })

    // ===================================
    // =               REST              =
    // ===================================
    app.get("/REST/:feederId/signets", function(req,res){    
        res.json(Data.getSignets(req.params.feederId));
    })

    // catch 404 and forward to error handler
    app.use(function(req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });

    // error handlers

    // development error handler
    // will print stacktrace
    if (app.get('env') === 'development') {
        app.use(function(err, req, res, next) {
            res.status(err.status || 500);
            res.render('error', {
                message: err.message,
                error: err
            });
        });
    }

    // production error handler
    // no stacktraces leaked to user
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {}
        });
    });
};