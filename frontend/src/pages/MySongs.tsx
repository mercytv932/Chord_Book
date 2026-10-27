function MySongs() {
  return (
    <div className="my-songs">
      <div className="songs-header-container">
        <div className="songs-header-texts">
          <h1>My Songs</h1>
          <p>Your personal chord library.</p>
        </div>
        <button>+ Add Song</button>
      </div>
      <input type="text" placeholder=" Search by song or artist..." />
    </div>
  );
}

export default MySongs;
//Song card will be here
