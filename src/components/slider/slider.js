import React, { Component } from 'react';
import Slide from './slide';
import LeftArrow from './components/slider/left_arrow';
import RightArrow from './components/slider/right_arrow';

export default class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }
  render() {
    return (
      <div className='slider'>
        <Slide />

          <LeftArrow />
          <RightArrow />

      </div>
    );
  }
}
