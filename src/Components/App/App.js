import React, { Component } from 'react';
import logo from './background_photo_desktop.jpg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';
import Spotify from '../../util/spotify.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state.searchResults = {
      name: '',
      artist: '',
      album: '',
      id: '',
      playlistName: "New Playlist",
      playlistTracks: [],
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);

  }

  addTrack(track) {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    let tracks = this.state.playlistTracks
    tracks.push(track)
    this.setState({ playlistTracks: tracks })
  }

  removeTrack(track) {
    let newPlaylistTracks = this.state.playlistTracks.filter(plTrack =>
    plTrack.id !== track.id);
    this.setState({playlistTracks: newPlaylistTracks});
 }

 updatePlaylistName(newName) {
    this.setState({playlistName: newName});
 }

 savePlaylist() {
    let trackURIs = this.state.playlistTracks.map(track => track.uri)
    Spotify.savePlaylist(this.state.playlistName, trackURIs)
    this.setState({ playlistName: "New Playlist", playlistTracks: [] })
    this.setState({
      query: "",
      searchResults: []
    })
  }

  search(searchTerm) {
        Spotify.search(searchTerm).then(tracks =>
        this.setState({searchResults: tracks}));
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search}/>
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
            <Playlist playlistName={this.state.playlistName} playlist={this.state.playlistTracks} onRemove={this.removeTrack} onNameChange={updatePlaylistName} onSave={this.savePlaylist}/>
          </div>
        </div>
      </div>
    );
  }
}
