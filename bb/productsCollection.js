var Backbone = require('backbone'),
    Product = require('./productsModel');

module.exports = Products = Backbone.Collection.extend({

  model: Product,

  url: function () {
    return 'http://data.joinhoney.com/products/'
  },

  initialize: function (models, options) {
    this.storename = options.storename;
  },

  parse: function (raw) {
    return raw.products;
  }

});
