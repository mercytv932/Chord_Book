import { Heart } from "lucide-react";
import { useState } from "react";
import songCardImage from "../assets/songCardImage.png.jpeg";

function SongCard() {
  const [isFavorite, setIsFavorite] = useState(false);
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
        <p className="chord-progression">C - Am - F - G</p>
      </div>
      <button
        className="favorite-button"
        type="button"
        onClick={() => setIsFavorite(!isFavorite)}
      >
        {" "}
        <Heart
          size={20}
          fill={isFavorite ? "red" : "none"}
          color={isFavorite ? "red" : "#c084fc"}
        />
      </button>
    </div>
  );
}
export default SongCard;
