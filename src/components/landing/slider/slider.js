import React, { Component } from 'react';
import Slide from './slide';
import landingData from '../Landing';
import LeftArrow from './left_arrow';
import RightArrow from './right_arrow';
import './main.css';

export default class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0,
      
      length: landingData.length
    };
  }

  goToPrevSlide() {
    let index = this.state.activeIndex;
    let length = this.state.length;

    if(index < 1) {
      index = length - 1;
    }
    else {
      index--;
    }

    this.setState({
      activeIndex: index
    });
  }

  goToNextSlide() {
      let index = this.state.activeIndex;
      let length = this.state.length;

      if(index === length - 1) {
        index = 0
      }
      else {
        index++;
      }

      this.setState({
        activeIndex: index
      });
  }

  render() {
    return (
      <div className='slider'>
        <div className='slider-items'>
          <LeftArrow
            goToPrevSlide={() => this.goToPrevSlide()}
          />
        <div className='slider-text'>
          <Slide
            activeIndex={this.state.activeIndex}
            goToNextSlide={() => this.goToNextSlide()}
          />
        </div>
          <RightArrow
            goToNextSlide={() => this.goToNextSlide()}
          />
        </div>
      </div>
    );
  }
}
