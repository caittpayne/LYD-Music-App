import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import landingData from '../Landing';
import Library from '../../Library';
import './main.css';

class Slide extends Component {
  constructor(props) {
    super(props);
    this.state = {landing: landingData};
  }

  render() {
    return(
      <section>
      {
        this.state.landing.map((s, index) =>
          <div className={
            index === this.props.activeIndex ? 'active' : 'slide'}
            key={index}>
              <h1 className={index === 0 ? 'mainSlide' : 'slider-item'}>{s.title}</h1>
              <p>{s.description}</p>
              <Link to='../../Library'><button className='button'>{s.buttons}</button></Link>
              <button className={index === 0 ? 'secondButton' : 'noButton'} onClick={this.props.goToNextSlide}>{s.buttons2}</button>
          </div>
        ) }
        </section>
    )
  }
}

export default Slide;
