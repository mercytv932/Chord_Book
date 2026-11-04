import songCardImage from "../assets/songCardImage.png.jpeg";

function SongCard() {
  return (
    <div className="song-card">
      <img src={songCardImage} alt="" />
      <div className="song-card-content">
        <h3>Song Name</h3>
        <p>Artist Name</p>
        <p>Song Key</p>

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
