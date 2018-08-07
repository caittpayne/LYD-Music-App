
import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css'
import Library from './components/Library';
import Album from './components/Album';
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
        <main className='main'>
          <div className='slider'>
            <Route exact path='/' component={Slider} />
          </div>
          <Route path='/library' component={Library} />
          <Route path='/album/:slug' component={Album} />
        </main>
      </div>
    );
  }
}

export default App;
