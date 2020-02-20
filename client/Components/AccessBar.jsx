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

// ['sidebar', 'main-content', 'photo-sb', 'footer']


export default class AccessBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sections: null,
      currentSelection: null,
    }
    this.handleChange = this.handleChange.bind(this);
    this.myRef = React.createRef();
  }

  handleChange(e) {
    let currentId = this.state.sections[e];
    let currentElement = document.querySelector(`#${currentId}`);
    currentElement.tabIndex = -1;
    this.myRef.current = currentElement;
    this.setState({
      currentSelection: currentId,
    })
    this.myRef.current.focus();
  };

  componentDidMount() {
    this.setState({
      sections: this.props.sections,
    })
  }

  render() {

    // console.log(this.props)
    const keys = Object.keys(this.props.sections);
    const options = [];
    for (let i = 0; i < keys.length; i++) {
      options.push({ value: keys[i]});
    }

    return (
      <div className ='ally-nav-area' style={ barStyle }>
        <label htmlFor='accessibility-nav-bar'> Jump to: </label>
        <div id='accessibility-nav-bar'>
          <Dropdown
            options={options}
            style={styles}
            placeholder='Sections of this page'
            ariaLabel='Navigation Assistant'
            setSelected={this.handleChange}
          />
        </div>
      </div>
    )
  }
}