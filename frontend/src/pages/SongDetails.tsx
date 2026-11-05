import { Link } from "react-router-dom";
import songCardImage from "../assets/songCardImage.png.jpeg";

function SongDetails() {
  return (
    <div className="song-details-container">
      <Link to="/songs">←</Link>
      <div className="song-detail">
        <img
          src={songCardImage}
          alt="piano cover"
          className="song-cover-image"
        />
        <div>
          <h1>Song.Title</h1>
          <p>Song.Artist</p>
          <h4>Song.Key</h4>
        </div>
      </div>
      <div className="chords-container">
        <h3>Chord Progression</h3>
        <p>Play the chords in this order </p>
        <p>G - C - G - D</p>
      </div>
    </div>
  );
}

export default SongDetails;
