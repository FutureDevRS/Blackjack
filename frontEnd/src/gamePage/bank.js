import React, { Component } from 'react';

export default class Bank extends Component {

  render() {
    return (
      <div>
        <div className='bankBalance'>Bank:</div>
        <div className='chips'>
          <div className='five'>
            <button>5</button>
            <h6>10</h6>
          </div>
          <div className='twentyFive'>
            <button>25</button>
            <h6>10</h6>
          </div>
          <div className='fifty'>
            <button>50</button>
            <h6>5</h6>
          </div>
          <div className='oneHundred'>
            <button>100</button>
            <h6>5</h6>
          </div>
          <div className='fiveHundred'>
            <button>500</button>
            <h6>1</h6>
          </div>
        </div>
      </div>
    );
  }
};