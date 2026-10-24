function Login() {
  return (
    <form className="login-form">
      <h3>The Chord Book</h3>
      <h1>Welcome back</h1>
      <p>Sign in and enojoy your music in harmony</p>
      <div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div className="input group">
          <label htmlFor="Password">Password</label>
          <input type="password" id="password" />
        </div>
        <button type="submit">Sign in</button>
      </div>
      <div>
        <p>Forgot your password?</p>
        <div className="or">
          <hr />
          <p>OR</p>
          <hr />
        </div>
      </div>
    </form>
  );
}

export default Login;
