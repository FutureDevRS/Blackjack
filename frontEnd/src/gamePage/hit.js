import React, { Component } from 'react';
// import Deck from './deckOfCards';

export default class Hit extends Component {
  // constructor(props) {
  //   super(props)

  // }

  // deck = {
  //   twoOfSpades: 2,
  //   twoOfHearts: 2,
  //   twoOfDiamonds: 2,
  //   twoOfClubs: 2,
  //   threeOfSpades: 3,
  //   threeOfHearts: 3,
  //   threeOfDiamonds: 3,
  //   threeOfClubs: 3,
  //   fourOfSpades: 4,
  //   fourOfHearts: 4,
  //   fourOfDiamonds: 4,
  //   fourOfClubs: 4,
  //   fiveOfSpades: 5,
  //   fiveOfHearts: 5,
  //   fiveOfDiamonds: 5,
  //   fiveOfClubs: 5,
  //   sixOfSpades: 6,
  //   sixOfHearts: 6,
  //   sixOfDiamonds: 6,
  //   sixOfClubs: 6,
  //   sevenOfSpades: 7,
  //   sevenOfHearts: 7,
  //   sevenOfDiamonds: 7,
  //   sevenOfClubs: 7,
  //   eightOfSpades: 8,
  //   eightOfHearts: 8,
  //   eightOfDiamonds: 8,
  //   eightOfClubs: 8,
  //   nineOfSpades: 9,
  //   nineOfHearts: 9,
  //   nineOfDiamonds: 9,
  //   nineOfClubs: 9,
  //   tenOfSpades: 10,
  //   tenOfHearts: 10,
  //   tenOfDiamonds: 10,
  //   tenOfClubs: 10,
  //   jackOfSpades: 10,
  //   jackOfHearts: 10,
  //   jackOfDiamonds: 10,
  //   jackOfClubs: 10,
  //   queenOfSpades: 10,
  //   queenOfHearts: 10,
  //   queenOfDiamonds: 10,
  //   queenOfClubs: 10,
  //   kingOfSpades: 10,
  //   kingOfHearts: 10,
  //   kingOfDiamonds: 10,
  //   kingOfClubs: 10,
  //   aceOfSpades: 11,
  //   aceOfHearts: 11,
  //   aceOfDiamonds: 11,
  //   aceOfClubs: 11,
  // }


  // handleHit() {
  //   console.log(this.deck)
  // }


  render() {
    return (
      <div>
        <button className='hitBtn' onClick={this.handleHit}>Hit</button>
      </div>
    );
  }
};