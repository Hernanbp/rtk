import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../features/filter/filterSlice";
import { Spinner } from "../components/Spinner";

export const Products = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [fakeProducts, setFakeProducts] = useState([]);

  const getProducts = async () => {
    setIsFetching(true);
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log(data);
    setFakeProducts(data);
    setIsFetching(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const selecCategory = useSelector(getSelectedCategory);

  return (
    <div className="products">
      {isFetching ? (
        <Spinner />
      ) : (
        fakeProducts
          .filter((product) => {
            if (selecCategory === "All") return true;
            return selecCategory === product.category;
          })
          .map((product) => (
            <div className="product" key={product.id}>
              <div className="img-card">
                <img src={product.image} alt="productImage" />
              </div>
              <div className="card-body">
                <p>{product.category}</p>
                <h3>{product.title.substring(0, 60)}</h3>
                <p>{product.description.substring(0, 120)}</p>
                <div className="card-bot">
                  <button>Add to cart</button>
                  <p>${product.price}</p>
                </div>
              </div>
            </div>
          ))
      )}
    </div>
  );
};
