function Login() {
  return (
    <form className="login-form">
      <h3>The Chord Book</h3>
      <h1>Welcome back</h1>
      <p>Sign in and enjoy your music in harmony</p>
      <div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="youremail@gmail.com" />
        </div>
        <div className="input group">
          <label htmlFor="Password">Password</label>
          <input type="password" id="password" placeholder="Your password" />
        </div>
        <button type="submit">Sign in</button>
      </div>
      <div>
        <div className="or">
          <hr />
          <p>OR</p>
          <hr />
        </div>
        <button>Create an account</button>
      </div>
    </form>
  );
}

export default Login;
