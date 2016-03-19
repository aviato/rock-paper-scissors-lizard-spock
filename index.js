var React    = require('react');
var ReactDOM = require('react-dom');


var Choice = React.createClass({
  render: function () {
    var text = this.props.text;
    var game = this.props.playGame.bind(this, text);
    return (
      <button onClick={game}>{text}</button>
    );
  }
});

var UserSelection = React.createClass({
  render: function () {
    return (
      <div>
        <Choice playGame={this.props.playGame.bind(this)} text={'Rock'} />
        <Choice playGame={this.props.playGame.bind(this)} text={'Paper'} />
        <Choice playGame={this.props.playGame.bind(this)} text={'Scissors'} />
        <Choice playGame={this.props.playGame.bind(this)} text={'Lizard'} />
        <Choice playGame={this.props.playGame.bind(this)} text={'Spock'} />
      </div>
    );
  }
});

var Results = React.createClass({
  render: function () {
    return (
      <h2>{this.props.result}</h2>
    );
  }
});

var App = React.createClass({
  getInitialState: function () {
    return {result: 'Press a button to begin playing.'};
  },
  playGame: function (userChoice) {
    var choices = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];
    var compChoice = choices[Math.floor(Math.random() * 5)];

    if (userChoice === 'Rock') {

      if (compChoice === 'Scissors') {
        this.setState({result: 'Rock crushes Scissors! You win!' });
      } else if (compChoice === 'Lizard') {
        this.setState({result: 'Rock crushes Lizard! You win!' });
      } else if (compChoice === 'Paper') {
        this.setState({result: 'Paper covers Rock! You lose!' });
      } else if (compChoice === 'Spock') {
        this.setState({result: 'Spock vaporizes Rock! You lose!' });
      } else {
        this.setState({result: 'Tie game!' });
      }

    } else if (userChoice === 'Paper') {

      if (compChoice === 'Rock') {
        this.setState({result: 'Paper covers rock! You win!' });
      } else if (compChoice === 'Spock') {
        this.setState({result: 'Paper disproves Spock! You win!' });
      } else if (compChoice === 'Scissors') {
        this.setState({result: 'Scissors cuts paper! You lose!' });
      } else if (compChoice === 'Lizard') {
        this.setState({result: 'Lizard eats paper! You lose!' });
      } else {
        this.setState({result: 'Tie game!' });
      }

    } else if (userChoice === 'Scissors') {

      if (compChoice === 'Paper') {
        this.setState({result: 'Scissors cuts paper! You win!' });
      } else if (compChoice === 'Lizard') {
        this.setState({result: 'Scissors decapitates lizard! You win!' });
      } else if (compChoice === 'Rock') {
        this.setState({result: 'Rock crushes scissors! You lose!' });
      } else if (compChoice === 'Spock') {
        this.setState({result: 'Spock crushes scissors! You lose!' });
      } else {
        this.setState({result: 'Tie game!' });
      }

    } else if (userChoice === 'Lizard') {

      if (compChoice === 'Paper') {
        this.setState({result: 'Lizard eats paper! You win!' });
      } else if (compChoice === 'Spock') {
        this.setState({result: 'Lizard poisons Spock! You win!' });
      } else if (compChoice === 'Rock') {
        this.setState({result: 'Rock crushes lizard! You lose!' });
      } else if (compChoice === 'Scissors') {
        this.setState({result: 'Scissors decapitates lizard! You lose!' });
      } else {
        this.setState({result: 'Tie game!' });
      } 

    } else if (userChoice === 'Spock') {

      if (compChoice === 'Rock') {
        this.setState({result: 'Spock vaporizes rock! You win!' });
      } else if (compChoice === 'Scissors') {
        this.setState({result: 'Spock crushes scissors! You win!' });
      } else if (compChoice === 'Paper') {
        this.setState({result: 'Paper disproves Spock! You lose!' });
      } else if (compChoice === 'Lizard') {
        this.setState({result: 'Lizard poisons Spock! You lose!' });
      } else {
        this.setState({result: 'Tie game!' });
      }
    }

  },
  render: function () {
    return (
      <div>
        <h1>Rock, Paper, Scissors, Lizard, Spock!</h1>
        <Results result={this.state.result} />
        <UserSelection playGame={this.playGame} />
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementsByClassName('app-container')[0]);