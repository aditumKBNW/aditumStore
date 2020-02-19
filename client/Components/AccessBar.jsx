/*
 * @description accessibility bar component to allow user to jump focus to different components on screen
*/
import React, { Component } from 'react';
import Dropdown from 'react-dropdown-aria';
import styles from '../css/dropdown.js';

const barStyle =  {
  display: 'flex',
  paddingTop: '.1em',
  paddingBottom: '.1em',
  paddingLeft: '5em',
  alignItems: 'center',
  fontSize: '.8em',
  backgroundColor: 'gray',
};

export default class AccessBar extends Component {
  render() {
    return (
      <div className ='ally-nav-area' style={ barStyle }>
        <label htmlFor='accessibility-nav-bar'> Jump to: </label>
        <div id='accessibility-nav-bar'>
          <Dropdown
            options={[
              { value: 'one' },
              { value: 'two' },
              { value: 'three' }
            ]}
            style={styles}
            placeholder='Sections of this page'
            ariaLabel='Navigation Assistant'
          />
        </div>
      </div>
    )
  }
}