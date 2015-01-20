var React = require('React');
var Link = require('react-router-component').Link

module.exports = Index = React.createClass({
  doClick: function() {
    console.log('doclick');
  },

  render: function() {
    var key = 0;
    var data = this.props.collection.map(function (item) {
      return <p key={ key++ }>{ item.get('description')  }</p>
    });
    return ( 
      <div> 
        <Link href="/test">Click Here</Link>
        {data} 
      </div> )
  }
});
