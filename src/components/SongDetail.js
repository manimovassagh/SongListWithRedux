import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (!song) {
    return <div><h3>Select your Song</h3></div>;
  }

  return (
    <div>
      <h3>Song Details</h3>
      <h3>
        Title:{song.title}
        <br />
        Duration:{song.duration}
      </h3>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};
export default connect(mapStateToProps)(SongDetail);
