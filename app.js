var express = require('express'),
    router = require('./router'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    port = process.env.PORT || 3000;

var app = express();
app.listen(port);
mongoose.connect('mongodb://127.0.0.1:27017');
app.set('views', __dirname +'/public');
app.set('view engine', 'html');
app.engine('html', require('ejs').__express);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('static'));
app.use(function(req, res, next) {
    res.locals.siteUrl = 'http://' + req.hostname + ':' + port;
    next();
});
app.use(router);

module.exports = app;