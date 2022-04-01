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
                {product.title.substring(0, 60)}
              </div>
            </div>
          ))
      )}
    </div>
  );
};
