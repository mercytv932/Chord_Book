function SongDetails() {
  return (
    <div className="song-details-container">
      <div className="song detail">
        <img src="" alt="" />
        <div>
          <h1>Title</h1>
          <p>Artist</p>
          <h4>Key</h4>
        </div>
      </div>
      <div className="chords-container">
        <h2>Chord Progression</h2>
        <p>Play the chords in this order </p>G - C - G - D
      </div>
    </div>
  );
}

export default SongDetails;
