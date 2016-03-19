var React  = require('react');

module.exports = React.createClass({
  render: function () {
    var text = this.props.text;
    var game = this.props.playGame.bind(this, text);
    return (
      <button className="btn btn-default" onClick={game}>{text}</button> 
    );
  }
});