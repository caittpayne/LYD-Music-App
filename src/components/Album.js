import React, { Component } from 'react';

class Album extends Component {
  render() {
    return (
      <section className='album'>
        {this.props.match.params.slug} Album will go here
      </section>
    );
  }
}

export default Album;
