function SongForm() {
  return (
    <div className="form-container">
      <form>
        <div className="input-group">
          <label htmlFor="songname">Song Name</label>
          <input
            type="text"
            placeholder="e.g. What a beautiful name it is"
            id="songname"
            name="songName"
          />
        </div>
        <div className="input-group">
          <label htmlFor="artist">Artist</label>
          <input type="text" placeholder="e.g. johnny Johnson" id="artist" />
        </div>
        <div className="input-group">
          <label htmlFor="chord-progression">Chord Progression</label>
          <textarea
            id="chord-progression"
            name="chordProgression"
            placeholder="e.g. 1 - 6 - 4 - 5"
            rows={4}
          />
          <p>Write the chords in the order you play them.</p>
        </div>

        <div className="input-group">
          <label htmlFor="key">Key (optional)</label>
          <input type="text" placeholder="e.g. G major" id="key" name="key" />
        </div>

        <div className="form-buttons">
          <button type="button" className="cancel-button">
            Cancel
          </button>
          <button type="submit" className="save-button">
            Save Song →
          </button>
        </div>
      </form>
    </div>
  );
}

export default SongForm;
