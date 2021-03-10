import {combineReducers} from 'redux';

const songsReducer = () => {
  return [
    {
      title: "No Scrubs",
      duration: "4:05",
    },
    {
      title: "Macarena",
      duration: "6:05",
    },
    {
      title: "All start",
      duration: "8:05",
    },
    {
      title: "some songs",
      duration: "11:25",
    },
    {
      title: "Ghomeishi",
      duration: "11:25",
    },
    {
      title: "Ebi",
      duration: "11:25",
    },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};
export default combineReducers({
    songs:songsReducer,
    selectedSong:selectedSongReducer,
});
