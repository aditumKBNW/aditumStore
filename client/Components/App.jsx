import React, {Component} from 'react';
import Home from './Home.jsx'


class App extends Component {

  // updates title dynamically
  componentDidMount() {
    document.title = 'Home | AdiStore';
  }

  render () {
    return (
      <main>
        <Home />
      </main>
    );
  }
}

export default App;