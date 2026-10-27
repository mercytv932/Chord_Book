function SongForm() {
  return (
    <div className="form-container">
      <form>
        <div className="input-gorup">
          <label htmlFor="songname">Song Name</label>
          <input
            type="text"
            placeholder="e.g. What a beautiful name it is"
            id="songname"
          />
        </div>
        <div className="input-group">
          <label htmlFor="artist">Artist</label>
          <input type="text" placeholder="e.g. john Noah" id="artist" />
        </div>
        <div className="input-group">
          <label htmlFor="">Chord Progression</label>
          <input type="text" placeholder="e.g. 1 - 6 - 4 - 5" />
          <p>Write the chords in the order you play them.</p>
        </div>

        <div className="input-group">
          <label htmlFor="key">Key (optional)</label>
          <input type="text" placeholder="e.g. G major" id="key" />
        </div>
      </form>
    </div>
  );
}

export default SongForm;
