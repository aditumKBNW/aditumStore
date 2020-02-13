import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Nav.jsx'
import About from './About.jsx';
import Store from './Store.jsx';
// import Review from './Review.jsx'


class Home extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch >
          <Route exact path="/about" component={About}/>
          <Route exact path ='/store' component={Store}/>
        </Switch>
        {/* 
        <Route exact path ='/review' component={Review}/> */}
      </Router>
    );
  }
}

export default Home;