import React, { Component } from 'react';
import './main.css';

class PlayerBar extends Component {
  render() {
    return(
      <section className='player-bar'>
        <section id='time-control' className='bar-item'>
          <div className='current-time nested-item'>{this.props.currentTime}</div>
          <input
            type='range'
            id='time-bar'
            className='seek-bar nested-item'
            onChange={this.props.handleTimeChange}
            defaultValue={this.props.currentTime / this.props.duration || 0}
            max='1'
            min='0'
            step='0.01'
           />
          <div className='total-time nested-item'>{this.props.duration}</div>
        </section>
        <section id='buttons' className='bar-item'>
          <button id='previous' onClick={this.props.handlePrevClick} className='nested-item'>
            <span className='icon ion-md-skip-backward'></span>
          </button>
          <button id='play-pause' onClick={this.props.handleSongClick} className='nested-item'>
            <span className={this.props.isPlaying ? 'icon ion-md-pause' : 'icon ion-md-play'}></span>
          </button>
          <button id='next' onClick={this.props.handleNextClick} className='nested-item'>
            <span className='icon ion-md-skip-forward'></span>
          </button>
        </section>
        <section id='volume-control' className='bar-item'>
          <div className='icon ion-md-volume-low nested-item'></div>
          <input
            type='range'
            className='seek-bar nested-item'
            defaultValue={this.props.currentVolume}
            max='1'
            min='0'
            step='0.01'
            onChange={this.props.handleVolumeChange} />
        </section>
      </section>
    );
  }
}

export default PlayerBar;
