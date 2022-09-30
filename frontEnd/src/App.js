import React, { Component } from 'react';
import Hit from './gamePage/hit';
import Stay from './gamePage/stay';
import ScoreBoard from './gamePage/dealerVsPlayer';
import Center from './gamePage/center'
import DealerHand from './gamePage/dealerHand'
import Bank from './gamePage/bank'
import PlayerHand from './gamePage/playerHand'

export default class App extends Component {
  render() {
    return (
      <div>
        <div className='top'>
          <h4 className='scoreboard'>
            <ScoreBoard />
          </h4>
          <DealerHand />
          <div className='spacerRight'></div>
        </div>

        <div className='spacerOne'></div>

        <div className='gameBoard'>
          <div className='hit'>
            <Hit />
          </div>
          <div className='center'>
            <Center />
          </div>
          <div className='stay'>
            <Stay />
          </div>
        </div>

        <div className='spacerOne'></div>


        <div className='bottom'>
          <div className='bank'>
            <Bank />
          </div>
          <PlayerHand />
          <div className='spacerRight'></div>

        </div>

      </div>
    );
  }
};