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
            <h3>Save</h3>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
