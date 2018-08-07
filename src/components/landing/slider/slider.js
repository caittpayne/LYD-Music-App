import React, { Component } from 'react';
import Slide from './slide';
import LeftArrow from './left_arrow';
import RightArrow from './right_arrow';
import Landing from '../Landing';

export default class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slides: Landing,
      currentIndex: 0
    }
  }

  goToPrevSlide = () => {

  }

  goToNextSlide = () => {
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1
    }));
  }

  render() {
    return (
      <div className='slider'>


<div>{this.state.slides}</div>
          <LeftArrow
            goToPrevSlide={this.goToPrevSlide}
          />
          <RightArrow
            goToNextSlide={this.goToNextSlide}
          />

      </div>
    );
  }
}
