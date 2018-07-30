import React, { Component } from 'react';
import './Track.css';

class Track extends Component {
  constructor(prop){
      this.addTrack = this.addTrack.bind(this);
      this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack() {
       this.props.onAdd(this.props.track);
  }

  removeTrack() {
       this.props.onRemove(this.props.track);
  }

  render() {
    return (
      <div className="Track">
        <div class="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
        <a class="Track-action" onClick={this.addTrack}>+</a>
        <a class="Track-action" onClick={this.removeTrack}>-</a>
      </div>
    );
  }
}

export default Track;
