import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../../data/albums';
import './main.css';

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = {albums: albumData};
  }
  render() {
    return (
      <div className='lib'>
        <section className='albums'>
          {
            this.state.albums.map((album, index) =>
              <Link to={`/album/${album.slug}`} key={index}>
                <img src={album.albumCover} alt={album.title} className='cover'/>
                <h3>{album.title}</h3>
                <h5>{album.artist}</h5>
                <p>{album.songs.length} songs</p>
              </Link>
        )
      }
        </section>
        <section><p>Hi</p></section>
        </div>
    );
  }
}

export default Library;
