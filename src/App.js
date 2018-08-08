
import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css'
import Library from './components/library/Library';
import Album from './components/album/Album';
import Slider from './components/landing/slider/slider';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <header className='head'>
          <div className='logo-area'>
            <Link to='/'><img src='/assets/images/logo.png' alt='LYD logo' id='logo'/></Link>
          </div>
          <nav className='nav'>
            <Link to='/' className='nav-item'>Home</Link>
            <Link to='/library' className='nav-item'>Library</Link>
          </nav>
        </header>
        <main>
          <Route exact path='/' component={Slider} />
          <Route path='/album/:slug' component={Album} />
          <Route path='/library' component={Library} />
        </main>
      </div>
    );
  }
}

export default App;
