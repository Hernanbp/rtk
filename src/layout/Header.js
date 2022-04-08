import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <h2>Axie.wiki</h2>
      <nav>
        <ul>
          <li>Cards</li>
          <li>Runes</li>
          <li>Charms</li>
        </ul>
        <div className="header-auth">
          <Link to="auth">
            <button className="btn-primary">Login</button>
          </Link>
          <Link to="auth">
            <p>Register</p>
          </Link>
        </div>
      </nav>
    </header>
  );
};
