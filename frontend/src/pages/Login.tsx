import { Link } from "react-router-dom";
function Login() {
  return (
    <form className="login-form">
      <div className="login-texts">
        <h3>The Chord Book</h3>
        <h1>Welcome back</h1>
        <p>Sign in and enjoy your music in harmony</p>
      </div>
      <div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="youremail@gmail.com"
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            placeholder="Your password"
          />
        </div>
        <button type="submit" className="signin-button">
          Sign in
        </button>
      </div>
      <div>
        <div className="or">
          <hr />
          <p>OR</p>
          <hr />
        </div>
        <Link to="/signup" className="auth-switch-sign-up">
          Create an account
        </Link>{" "}
      </div>
    </form>
  );
}

export default Login;
