var React  = require('react');
var Choice = require('./Choice');

module.exports =  React.createClass({
  render: function () {
    return (
      <div className="row">
        <div className="col-xs-12">
          <Choice playGame={this.props.playGame.bind(this)} text={'Rock'} />
          <Choice playGame={this.props.playGame.bind(this)} text={'Paper'} />
          <Choice playGame={this.props.playGame.bind(this)} text={'Scissors'} />
          <Choice playGame={this.props.playGame.bind(this)} text={'Lizard'} />
          <Choice playGame={this.props.playGame.bind(this)} text={'Spock'} />
        </div>
      </div>
    );
  }
});