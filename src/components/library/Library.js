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
      <div className='library'>
        <div className='head-section'>
          <h2>Albums</h2>
        </div>
        <section className='albums'>
          {
            this.state.albums.map((album, index) =>
              <Link to={`/album/${album.slug}`} key={index} className='album-item'>
                <img src={album.albumCover} alt={album.title} className='cover'/>
                <h3 id='title'>{album.title}</h3>
                <h5 id='artist'>{album.artist}</h5>
                <p id='song'>{album.songs.length} songs</p>
              </Link>
        )
      }
        </section>
      </div>
    );
  }
}

export default Library;
