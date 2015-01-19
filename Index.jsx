var React = require('React');

module.exports = Index = React.createClass({
  doClick: function() {
    console.log('doclick');
  },

  render: function() {
    var key = 0;
    var data = this.props.collection.map(function (item) {
      return <p key={ key++ }>{ item.get('description')  }</p>
    });
    return ( <div> {data} </div> )
  }
});
