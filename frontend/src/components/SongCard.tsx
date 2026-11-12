import songCardImage from "../assets/songCardImage.png.jpeg";

function SongCard() {
  return (
    <div className="song-card">
      <img
        src={songCardImage}
        alt=""
        className="
      song-card-image"
      />
      <div className="song-card-content">
        <div className="song-info">
          <h3>Song Name</h3>
          <p>Artist Name</p>
          <p>Song Key</p>
        </div>

        <div className="song-chords">
          <span className="span-chords">Chords</span>
          <p className="chord-progression">C - Am - F - G</p>
        </div>
      </div>
      <button className="favorite-button">Favorite ❤️ </button>
    </div>
  );
}
export default SongCard;
