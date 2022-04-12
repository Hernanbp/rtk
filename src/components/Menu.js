import { Card } from "./Card";
import { Categories } from "./Categories";

export const Menu = () => {
  return (
    <>
      <div className="banner">
        <h1>From your favorite restaurants, to your house.</h1>
        <div className="search">
          <input placeholder="Enter your delivery adress" type="text" />
          <button>Search food</button>
        </div>
        <p>
          <a href="login">Login</a> to see your recent delivery locations.
        </p>
      </div>
      <div className="menu-categories">
        <Categories />
      </div>
      <div className="menu">
        <Card
        // key={id}
        // image={image}
        // name={name}
        // description={description}
        // price={price}
        />
        <Card
        // key={id}
        // image={image}
        // name={name}
        // description={description}
        // price={price}
        />
        <Card
        // key={id}
        // image={image}
        // name={name}
        // description={description}
        // price={price}
        />
        <Card
        // key={id}
        // image={image}
        // name={name}
        // description={description}
        // price={price}
        />
        <Card
        // key={id}
        // image={image}
        // name={name}
        // description={description}
        // price={price}
        />
        <Card
        // key={id}
        // image={image}
        // name={name}
        // description={description}
        // price={price}
        />
        <Card
        // key={id}
        // image={image}
        // name={name}
        // description={description}
        // price={price}
        />
        <Card
        // key={id}
        // image={image}
        // name={name}
        // description={description}
        // price={price}
        />
      </div>
    </>
  );
};
