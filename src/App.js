
import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css'
import Library from './components/Library';
import Album from './components/Album';
import Slider from './components/landing/slider/slider';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <Link to='/'>Home</Link>
            <Link to='/library'>Library</Link>
          </nav>
          <h1>Bloc Jams</h1>
        </header>
        <main>
          <Route exact path='/' component={Slider} />
          <Route path='/library' component={Library} />
          <Route path='/album/:slug' component={Album} />
        </main>
      </div>
    );
  }
}

export default App;
