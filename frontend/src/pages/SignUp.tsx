import { Link } from "react-router-dom";

function SignUp() {
  return (
    <form className="login-form">
      <h3>The Chord Book</h3>
      <h1>Create your account</h1>
      <p>Start building your chord library</p>
      <div>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" placeholder="Your username" />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="youremail@gmail.com" />
        </div>
        <div className="input group">
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Create a password"
          />
        </div>

        <div className="input group">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            placeholder="Confirm your password"
          />
        </div>
        <button type="submit">Sign Up</button>
        <p className="auth-switch">
          Already have an account?<Link to="/login">Login</Link>
        </p>
      </div>
    </form>
  );
}

export default SignUp;
