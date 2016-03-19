var React = require('react');

module.exports = React.createClass({
  render: function () {
    var userChoice = this.props.gameInfo.userChoice;
    var compChoice = this.props.gameInfo.compChoice;

    var imgSelect = function (state) {
      var imgSrcs = {
        Rock: './images/rock.png',
        Paper: './images/paper.png',
        Scissors: './images/scissors.png',
        Lizard: './images/lizard.png',
        Spock: './images/spock.png'
      };
      return state ? imgSrcs[state] : ''; 
    };

    var textShow = function (state) {
      return state ? 'V.S.' : '';
    };

    return (
      <div className="row">
        <div className="col-sm-4">
          <h2>{userChoice}</h2>
          <img className="img-circle user-choice" src={imgSelect(userChoice)}/>
        </div>
        <div className="col-sm-4">
          <span className="vs"><h2>{textShow(userChoice)}</h2></span>
        </div>
        <div className="col-sm-4">
          <h2>{compChoice}</h2>
          <img className="img-circle compChoice" src={imgSelect(compChoice)}/>
        </div>
        <div className="col-xs-12">
          <h2>{this.props.gameInfo.result}</h2>
        </div>
      </div>
    );
  }
});