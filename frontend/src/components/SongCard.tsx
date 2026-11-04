import songCardImage from "../assets/songCardImage.png.jpeg";

function SongCard() {
  return (
    <div className="song-card">
      <img src={songCardImage} alt="" />
      <div className="song-card-content">
        <h3>Song Name</h3>
        <p>Artist Name</p>
        <p>Song Key</p>

        <div className="chords">
          <span>Chords</span>
          <p>C - Am - F - G</p>
        </div>
      </div>
      <button>Favorite ❤️ </button>
    </div>
  );
}
export default SongCard;
