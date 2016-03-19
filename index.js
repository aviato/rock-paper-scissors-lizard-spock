var React    = require('react');
var ReactDOM = require('react-dom');
var appDomNode = document.getElementsByClassName('app-container')[0];

var Cool = React.createClass({
  render: function(){ return <div>hi</div>}
});

ReactDOM.render(<Cool />, appDomNode);