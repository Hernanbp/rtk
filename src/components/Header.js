import { useState } from "react";
import { Link } from "react-router-dom";
import { Login } from "./Login";

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header>
      <div className="container">
        <nav>
          <h2>
            App<span>Food</span>
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
        <button
          onClick={() => setIsLoggedIn(!isLoggedIn)}
          className="btn-primary"
        >
          Login
        </button>
        {isLoggedIn ? <Login /> : null}
      </div>
    </header>
  );
};
