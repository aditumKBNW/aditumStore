/**
 * @description About page for our mock store to test React focus management
 */

import React, { Component } from 'react';

class About extends Component {


  render() {
    return (
      <div id='about'>
        <img src='https://images.unsplash.com/photo-1518966377293-74c63a1ec149?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2800&q=80' alt='person pouring coffee into mug'></img>
        <div className='wrapper'>
          <h1>About AdiStore</h1>
          <p><strong>Our mission?</strong> To provide fare-trade, delicious coffee to the tired masses of Codesmith cohorts 16 and 17.</p>
          <p><strong>Our why?</strong> We need to test out our accessability functionality. We also like coffee.</p>
          <p><strong>Who are we?</strong> Kelvin, Nicole, Will, and Ben.</p>
          <p><strong>How do I buy?</strong> You don't. We don't actually have coffee for you.</p>
        </div>
      </div>
    )
  }
}

export default About;