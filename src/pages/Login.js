import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="loginwrapper">
      <div className="login">
        <h2>Sign In</h2>
        <form>
          <label htmlFor="username">Username or Email Adress</label>
          <input type="text" name="username" autoComplete="off" />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
          <div className="login-actions">
            <button className="btn-login" type="submit">
              Login
            </button>
            <Link to="/">
              <p>Forgot Password?</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
