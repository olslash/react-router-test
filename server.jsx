Backbone = require('backbone');
$ = require('jquery');
Backbone.sync = require('backbone-super-sync');
Backbone.$ = $;

var express = require('express');
var url = require('url');
var React = require('React');
var App = require('./App.jsx');

var Products = require('./bb/productsCollection');

var app = express();
app.get('/bundle.js', function (req, res) {
  return res.sendFile(__dirname + '/bundle.js');
});

app.use(function (req, res, next) {
  try {
    var path = url.parse(req.url).pathname;
    var products = new Products(null, { });

    products.fetch().then(function() {
      var markup = React.renderToString(<App collection={ products } path={ path } />);
      res.send(markup);
    });

  } catch (err) {
    return next(err);
  }
});




app.listen(4000);
console.log('listening on 4000');
