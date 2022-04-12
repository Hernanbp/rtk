import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <h2>
            Easy<span>Food</span>
          </h2>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="menu">Menu</Link>
            </li>
          </ul>
        </nav>
        <Link to="login">
          <button className="btn-primary">Login</button>
        </Link>
      </div>
    </header>
  );
};
