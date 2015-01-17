Backbone = require('backbone');
$ = require('jquery');
Backbone.$ = $;

var React = require('React');
var App = require('./App.jsx');
var Products = require('./bb/productsCollection');

var products = new Products(null, {});

products.fetch().then(function () {
  console.log('fetched clientside');
  React.render(<App collection={ products }/>, document);
});

