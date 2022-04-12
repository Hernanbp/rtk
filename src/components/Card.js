export const Card = ({ image, name, description, price }) => {
  return (
    <div className="card">
      <img
        src="https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        alt="fast-food"
      />
      <div className="card-info">
        <div className="title">
          <h4>Hamburger</h4>
          <p>Category</p>
        </div>
        <small>Double Meat with Fries</small>
        <br />
        <small>from $0.99</small>
      </div>
    </div>
  );
};
