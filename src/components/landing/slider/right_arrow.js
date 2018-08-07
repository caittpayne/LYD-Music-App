import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

const RightArrow = (props) => {
  return (
    <div className='nextArrow onClick={props.goToNextSlide}'>
      <i className='fa fa-arrow-right fa-2x' aria-hidden='true'></i>
    </div>
  );
}

export default RightArrow;
