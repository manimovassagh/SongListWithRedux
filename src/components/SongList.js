import React, { Component } from "react";
import {connect} from 'react-redux';

class SongList extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Song List is working with Redux !!</h1>
      </div>
    );
  }
}


const mapStateToProps=(state) =>{
return {songs:state.songs};
}

export default connect(mapStateToProps) (SongList);
