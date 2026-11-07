import { Link } from "react-router-dom";
import { Music4, Star, Heart } from "lucide-react";

function Home() {
  return (
    <div className="home">
      <div className="home-greet">
        <p>Welcome to</p>
        <h1>
          The <span>Chord</span> Book
        </h1>
        <h3>Your songs. Your Chords. All in one place.</h3>

        <Link to="/mysongs" className="home-button">
          {" "}
          Explore My Songs <span>→</span>
        </Link>
      </div>

      <div className="home-features-container">
        <div className="features">
          <Music4 className="feature-icon" />
          <h3>Save Songs</h3>
          <p>Keep your chord library organized.</p>
        </div>

        <div className="features">
          <Star className="feature-icon" />
          <h3>Access Anywhere</h3>
          <p>Your songs, whenever you need them.</p>
        </div>

        <div className="features">
          <Heart className="feature-icon" />
          <h3>Play More</h3>
          <p>Focus on what matters: making music.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
