function MySongs() {
  return (
    <div className="my-songs">
      <div className="fav-header-container">
        <div className="fav-header-texts">
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
