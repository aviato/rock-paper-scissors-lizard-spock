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
      <div>
        <h2>{this.props.gameInfo.userChoice} v.s. {this.props.gameInfo.compChoice}!</h2>
        <h2>{this.props.gameInfo.result}</h2>
      </div>
    );
  }
});

var App = React.createClass({
  getInitialState: function () {
    return {
      result: 'Press a button to begin playing.',
      userChoice: null,
      compChoice: null
    };
  },
  playGame: function (userChoice) {
    var choices = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];
    var compChoice = choices[Math.floor(Math.random() * 5)];

    if (userChoice === 'Rock') {

      if (compChoice === 'Scissors') {
        this.setState({result: 'Rock crushes Scissors! You win!', userChoice: 'Rock', compChoice: compChoice });
      } else if (compChoice === 'Lizard') {
        this.setState({result: 'Rock crushes Lizard! You win!', userChoice: 'Rock', compChoice: compChoice});
      } else if (compChoice === 'Paper') {
        this.setState({result: 'Paper covers Rock! You lose!', userChoice: 'Rock', compChoice: compChoice });
      } else if (compChoice === 'Spock') {
        this.setState({result: 'Spock vaporizes Rock! You lose!', userChoice: 'Rock', compChoice: compChoice });
      } else {
        this.setState({result: 'Tie game!', userChoice: 'Rock', compChoice: compChoice });
      }

    } else if (userChoice === 'Paper') {

      if (compChoice === 'Rock') {
        this.setState({result: 'Paper covers rock! You win!', userChoice: 'Paper', compChoice: compChoice });
      } else if (compChoice === 'Spock') {
        this.setState({result: 'Paper disproves Spock! You win!', userChoice: 'Paper', compChoice: compChoice });
      } else if (compChoice === 'Scissors') {
        this.setState({result: 'Scissors cuts paper! You lose!', userChoice: 'Paper', compChoice: compChoice });
      } else if (compChoice === 'Lizard') {
        this.setState({result: 'Lizard eats paper! You lose!', userChoice: 'Paper', compChoice: compChoice });
      } else {
        this.setState({result: 'Tie game!', userChoice: 'Paper', compChoice: compChoice });
      }

    } else if (userChoice === 'Scissors') {

      if (compChoice === 'Paper') {
        this.setState({result: 'Scissors cuts paper! You win!', userChoice: 'Scissors', compChoice: compChoice });
      } else if (compChoice === 'Lizard') {
        this.setState({result: 'Scissors decapitates lizard! You win!', userChoice: 'Scissors', compChoice: compChoice });
      } else if (compChoice === 'Rock') {
        this.setState({result: 'Rock crushes scissors! You lose!', userChoice: 'Scissors', compChoice: compChoice });
      } else if (compChoice === 'Spock') {
        this.setState({result: 'Spock crushes scissors! You lose!', userChoice: 'Scissors', compChoice: compChoice });
      } else {
        this.setState({result: 'Tie game!', userChoice: 'Scissors', compChoice: compChoice });
      }

    } else if (userChoice === 'Lizard') {

      if (compChoice === 'Paper') {
        this.setState({result: 'Lizard eats paper! You win!', userChoice: 'Lizard', compChoice: compChoice });
      } else if (compChoice === 'Spock') {
        this.setState({result: 'Lizard poisons Spock! You win!', userChoice: 'Lizard', compChoice: compChoice });
      } else if (compChoice === 'Rock') {
        this.setState({result: 'Rock crushes lizard! You lose!', userChoice: 'Lizard', compChoice: compChoice });
      } else if (compChoice === 'Scissors') {
        this.setState({result: 'Scissors decapitates lizard! You lose!', userChoice: 'Lizard', compChoice: compChoice });
      } else {
        this.setState({result: 'Tie game!', userChoice: 'Lizard', compChoice: compChoice });
      } 

    } else if (userChoice === 'Spock') {

      if (compChoice === 'Rock') {
        this.setState({result: 'Spock vaporizes rock! You win!', userChoice: 'Spock', compChoice: compChoice });
      } else if (compChoice === 'Scissors') {
        this.setState({result: 'Spock crushes scissors! You win!', userChoice: 'Spock', compChoice: compChoice });
      } else if (compChoice === 'Paper') {
        this.setState({result: 'Paper disproves Spock! You lose!', userChoice: 'Spock', compChoice: compChoice });
      } else if (compChoice === 'Lizard') {
        this.setState({result: 'Lizard poisons Spock! You lose!', userChoice: 'Spock', compChoice: compChoice });
      } else {
        this.setState({result: 'Tie game!', userChoice: 'Spock', compChoice: compChoice });
      }
    }

  },
  render: function () {
    return (
      <div>
        <h1>Rock, Paper, Scissors, Lizard, Spock!</h1>
        <Results gameInfo={this.state} />
        <UserSelection playGame={this.playGame} />
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementsByClassName('app-container')[0]);