export const Login = () => {
  return (
    <div className="loginform">
      <h2>Login</h2>
      <label htmlFor="username" name="username">
        Username
      </label>
      <input autoComplete="off" type="text" name="username" />
      <label htmlFor="username" name="username">
        Password
      </label>
      <input type="password" name="password" />
      <button className="btn-primary">Login</button>
    </div>
  );
};
