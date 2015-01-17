var React = require('React');

module.exports = Index = React.createClass({
  doClick: function() {
    console.log('doclick');
  },

  render: function() {
    console.log(this.props.collection);
    var data = this.props.collection.map(function (item) {
      return <p key={ item.cid }>{ item.cid }</p>
    });
    return (
        <div>
        {data}
        </div>

    )
  }
});
