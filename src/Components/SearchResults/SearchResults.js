import React, { Component } from 'react';
import './SearchResults.css';
import Tracklist from './components/Tracklist/Tracklist';

class SearchResults extends Component {
  render() {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <TrackList tracks={this.props.searchResults} onAdd={this.props.onAdd}/>
      </div>
    );
  }
}

export default SearchResults;
