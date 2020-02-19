import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Nav.jsx'
import About from './About.jsx';
import Store from './Store.jsx';
import AccessBar from './AccessBar.jsx';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAccessBar: false,
    }
    this.handleKeydown = this.handleKeydown.bind(this);
  }
  
  handleKeydown(event) {
    if (event.key === 'Tab') {
      if (this.state.showAccessBar === false) {
        this.setState({ showAccessBar: true })
      }
      if (this.state.showAccessBar === true) {
        this.setState({ showAccessBar: false })
      }
    }
    
  }

  render() {
    console.log('this.state ', this.state);

    const showAccessBar = this.state.showAccessBar;
    let accessBar = null;

    // still need to set focus to dropdown when accessBar is true
    // set focus to navbar when accessBar is false
    if (showAccessBar) {
      accessBar = <AccessBar onClick={ this.handleKeydown }/>;
    } else {
      accessBar = null;
    }

    return (
      <div onKeyDown={ this.handleKeydown }>
        <Router>
          { accessBar }
          <Nav />
          <Switch >
            <Route exact path="/about" component={About}/>
            <Route exact path ='/store' component={Store}/>
          </Switch>
          {/* 
          <Route exact path ='/review' component={Review}/> */}
        </Router>
        </div>
    );
  }
}

export default Home;