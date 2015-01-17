var Index = require('./Index.jsx');
var NotFoundPage = require('./NotFound.jsx');
var React = require('React');
var Router = require('react-router-component');
var Pages = Router.Pages;
var Page = Router.Page;
var NotFound = Router.NotFound;

module.exports = App = React.createClass({

  render: function () {
    return (
        <html>
          <head>
            <script src="/bundle.js"></script>
          </head>
          <Pages path={ this.props.path }>
            <Page path="/" handler={ Index } collection={ this.props.collection }/>
            <NotFound handler={ NotFoundPage } />
          </Pages>
        </html>
    )
  }
});
