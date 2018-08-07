import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';

class RightArrow extends Component {
  render() {
    return(
      <div className='backArrow' onClick={this.props.goToNextSlide}>
        <i className='fa fa-angle-right fa-3x' aria-hidden='true'></i>
      </div>
    )
  }
}

export default RightArrow;
