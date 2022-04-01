export const Header = () => {
  return (
    <header>
      <div className="header-wrapper">
        <h2 className="logo">
          fake<span>commerce</span>
        </h2>
        <nav>
          <div className="search">
            <div className="ico"></div>
            <input type="text" placeholder="Search" />
          </div>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
