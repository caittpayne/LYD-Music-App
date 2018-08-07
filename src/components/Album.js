import React, { Component } from 'react';
import albumData from './../data/albums';
import PlayerBar from './PlayerBar';

class Album extends Component {
  constructor(props) {
    super(props);

    const album = albumData.find( album => {
      return album.slug === this.props.match.params.slug
    });

    this.state = {
      album: album,
      currentSong: album.songs[0],
      currentTime: 0,
      currentVolume: 0,
      duration: album.songs[0].duration,
      isPlaying: false,
      isHovered: false
    };

    this.audioElement = document.createElement('audio');
    this.audioElement.src = album.songs[0].audioSrc;
    this.list = album.songs;
  }

  componentDidMount() {
    this.eventListeners = {
      timeupdate: e => {
        this.setState({ currentTime: this.audioElement.currentTime });
        document.getElementById('time-bar').value = this.audioElement.currentTime / this.audioElement.duration;
      },
      durationchange: e => {
        this.setState({ duration: this.audioElement.duration });
      },
      volumechange: e => {
        this.setState({ currentVolume: this.audioElement.volume });
      }
    };
    this.audioElement.addEventListener('timeupdate', this.eventListeners.timeupdate);
    this.audioElement.addEventListener('durationchange', this.eventListeners.durationchange);
    this.audioElement.addEventListener('volumechange', this.eventListeners.volumechange);
  }

  conponentWillUnmount() {
    this.audioElement.src = null;
    this.audioElement = null;
    this.audioElement.removeEventListener('timeupdate', this.eventListeners.timeupdate);
    this.audioElement.removeEventListener('durationchange', this.eventListeners.durationchange);
    this.audioElement.removeEventListener('volumechange', this.eventListeners.volumechange);
  }

  play() {
    this.audioElement.play();
    this.setState({ isPlaying: true });
  }

  pause() {
    this.audioElement.pause();
    this.setState({ isPlaying: false });
  }

  setSong(song) {
    this.audioElement.src = song.audioSrc;
    this.setState({ currentSong: song });
  }

  handleSongClick(song) {
    const isSameSong = this.state.currentSong === song;
    if(this.state.isPlaying && isSameSong) {
      this.pause();
    }

    else {
      if (!isSameSong) { this.setSong(song); }
      this.play();
    }
  }

  hovered(index) {
    this.setState({isHovered: index});
  }

  notHovered(index) {
    this.setState({ isHovered: false});
  }

  buttonHovered(song, index) {
    const isSameSong = this.state.currentSong === song;
      if(this.state.isHovered === index) {
        return <span className='ion-md-play'></span>;
      }
      else if (this.state.isPlaying === true && isSameSong) {
        return <span className='ion-md-pause'></span>;
      }
      else if(this.state.isPlaying === false && isSameSong && this.state.currentTime > 0) {
        return <span className='ion-md-play'></span>
      }
      else {
        return <span>{index + 1}</span>;
      }
   }

   handlePrevClick() {
     const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
     const newIndex = Math.max(0, currentIndex - 1);
     const newSong = this.state.album.songs[newIndex];
     this.setSong(newSong);
     this.play();

   }

   handleNextClick() {
     const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
     const list = this.list.length - 1;
     const newIndex = Math.min(list, currentIndex + 1);
     const newSong = this.state.album.songs[newIndex];
     this.setSong(newSong);
     this.play();
   }

   handleTimeChange(e) {
     const newTime = this.audioElement.duration * e.target.value;
     this.audioElement.currentTime = newTime;
     this.setState({ currentTime: newTime });
   }

   handleVolumeChange(e) {
     const newVolume = e.target.value;
     this.audioElement.volume = newVolume;
     this.setState({ currentVolume: newVolume });
   }


   formatTime(time) {
      const min = Math.floor(time / 60);
      const sec = Math.floor(time % 60).toString().padStart(2, 0);

      if(typeof time !== 'number') {
        const int = parseFloat(time);
        const stringMin = Math.floor(int / 60);
        const stringSec = Math.floor(int % 60).toString().padStart(2, 0);

        return `${stringMin}:${stringSec}`
      }
      else {
        return `${min}:${sec}`;
      }
    }

  render() {
    return (
      <section className='album'>
        <section id='album-info'>
          <img id='album-cover-art' src={this.state.album.albumCover} alt={this.state.album.title}/>
          <div className='album-details'>
            <h1 id='album-title'>{this.state.album.title}</h1>
            <h2 className='artist'>{this.state.album.artist}</h2>
            <div id='release-info'>{this.state.album.releaseInfo}</div>
          </div>
        </section>
        <table id='song-list'>
          <colgroup>
            <col id='song-number-column' />
            <col id='song-title-column' />
            <col id='song-duration-column' />
          </colgroup>
          <tbody>
          {
            this.state.album.songs.map((song, index) =>
                <tr key={index} className='song' onClick={() => this.handleSongClick(song)} onMouseEnter={() => this.hovered(index)} onMouseLeave={() => this.notHovered(index)}>
                  <td>{this.buttonHovered(song, index)}</td>
                  <td>{song.title}</td>
                  <td>{this.formatTime(song.duration)}</td>
                </tr>
            )
          }
          </tbody>
        </table>
        <PlayerBar
          isPlaying={this.state.isPlaying}
          currentSong={this.state.currentSong}
          currentTime={this.formatTime(this.audioElement.currentTime)}
          duration={this.formatTime(this.audioElement.duration)}
          currentVolume={this.audioElement.volume}
          handleSongClick={() => this.handleSongClick(this.state.currentSong)}
          handlePrevClick={() => this.handlePrevClick()}
          handleNextClick={() => this.handleNextClick()}
          handleTimeChange={(e) => this.handleTimeChange(e)}
          handleVolumeChange={(e) => this.handleVolumeChange(e)}
          />
      </section>
    );
  }
}

export default Album;
