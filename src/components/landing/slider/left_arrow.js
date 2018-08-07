import React, { Component } from 'react';

class LeftArrow extends Component {
  render() {
    return(
      <div className='backArrow' onClick={this.props.goToPrevSlide}>
        <i className='fa fa-arrow-left fa-2x' aria-hidden='true'></i>
      </div>
    )
  }
}

export default LeftArrow;
