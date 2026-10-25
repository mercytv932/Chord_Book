function Home() {
  return (
    <div>
      <aside>
        <nav>
          <h3>The Chord Book</h3>
          <a href="#">Home</a>
          <a href="#">My Songs</a>
          <a href="#">Favorites</a>
        </nav>
        <button>
          {" "}
          <span></span>Logout
        </button>
      </aside>

      <main>
        <div className="home-greet">
          <p>Welcome to</p>
          <h1>The Chord Book</h1>
          <h3>Your songs. Your Chords</h3>
          <h3>All in one place.</h3>

          <button>
            Explore My Songs <span>→</span>
          </button>
        </div>

        <div className="home-advert">
          <div>
            <h3>Save Songs</h3>
            <p>Keep your chord library organized.</p>
          </div>

          <div>
            <h3>Access Anywhere</h3>
            <p>Your songs, whenever you need them.</p>
          </div>

          <div>
            <h3>Play More</h3>
            <p>Focus on what matters.</p>
            <p>making music.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
