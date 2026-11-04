import { Link } from "react-router-dom";
function MySongs() {
  return (
    <div className="my-songs">
      <div className="songs-header-container">
        <div className="songs-header-texts">
          <h1>My Songs</h1>
          <p>Your personal chord library.</p>
        </div>
        <Link to="/songs/new" className="add-song-button"></Link>
      </div>
      <input
        type="text"
        className="search-songs"
        placeholder=" Search by song or artist..."
      />

      <div className="songs-grid">all songs go here</div>
    </div>
  );
}

export default MySongs;
//Song card will be here
