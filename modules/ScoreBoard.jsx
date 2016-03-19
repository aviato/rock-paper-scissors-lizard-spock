var React = require('react');

module.exports = React.createClass({
  render: function () {
    var userScore = this.props.gameInfo.scores.user;
    var compScore = this.props.gameInfo.scores.comp;
    return (
      <div className="row">
        <h2>Score Board</h2>
        <h3>User: {userScore}</h3>
        <h3>Computer: {compScore}</h3>
      </div>
    )
  }
});