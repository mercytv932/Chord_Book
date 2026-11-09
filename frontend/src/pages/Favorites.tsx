function Favorites() {
  return (
    <div className="favorites">
      <div className="favorites-header">
        {" "}
        <h1>Favorites</h1>
        <p>Your go to songs, always.</p>
      </div>

      <input
        type="text"
        placeholder="Search your favorites..."
        className="favorites-search"
      />

      <div className="favorite-songs">{/* SongCard components go here */}</div>
    </div>
  );
}

export default Favorites;

// The song card belongs here
