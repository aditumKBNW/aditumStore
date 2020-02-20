import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Nav.jsx'
import About from './About.jsx';
import Store from './Store.jsx';
import AccessBar from './AccessBar.jsx';
import MainContainer from './MainContainer.jsx';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accessBar: null,
      sections: {
        'sidebar': 'sidebar',
        'main content': 'main-content',
        'photo sidebar': 'photo-sb',
        'footer': 'footer'
      },
    }
    this.handleKeydown = this.handleKeydown.bind(this);
    this.barRef = React.createRef();
  }

  handleKeydown(event) {
    if (event.key === 'Tab') {
      if (!this.state.accessBar) {
        this.setState({
          accessBar: <AccessBar sections={this.state.sections} ref={this.barRef}/>,
         })
      }
      if (this.state.accessBar) {
        this.setState({ accessBar: null })
      }
    }
  }

  render() {
    return (
      <div onKeyDown={ this.handleKeydown }>
        <Router>
          { this.state.accessBar }
          <Nav />
          <Switch >
            <Route exact path="/" component={MainContainer}/>
            <Route exact path="/about" component={About}/>
            <Route exact path ='/store' component={Store}/>
          </Switch>
        </Router>
        </div>
    );
  }
}

export default Home;