import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <div className="home-greet">
        <p>Welcome to</p>
        <h1>The Chord Book</h1>
        <h3>Your songs. Your Chords. All in one place.</h3>

        <Link to="/songs"> Explore My Songs</Link>
      </div>

      <div className="home-features">
        <div>
          <h3>Save Songs</h3>
          <p>Keep your chord library organized.</p>
        </div>

        <div className="extra-features">
          <h3>Access Anywhere</h3>
          <p>Your songs, whenever you need them.</p>
        </div>

        <div className="extra-features">
          <h3>Play More</h3>
          <p>Focus on what matters: making music.</p>
        </div>
      </div>
    </main>
  );
}

export default Home;
