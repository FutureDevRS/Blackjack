import React, { Component } from 'react';

export default class ScoreBoard extends Component {
  constructor(props) {
    super(props);

    this.dealerScore = this.dealerScore.bind(this);
    this.playerScore = this.playerScore.bind(this);
  }

  playerScore() {

  }

  dealerScore() {

  }

  render() {
    return (
      <div>
        <div className='scoreBoard'>
          <h3 className='dealer'>Dealer:</h3>
          <h3 className='player'>Player:</h3>
        </div>
      </div>
    );
  }
};