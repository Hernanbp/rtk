import { useSelector } from "react-redux";
import { products } from "../data/data";
import { getSelectedCategory } from "../features/filter/filterSlice";

export const Products = () => {
  const selecCategory = useSelector(getSelectedCategory);

  return (
    <div>
      {products
        .filter((product) => {
          if (selecCategory === "All") return true;
          return selecCategory === product.category;
        })
        .map((product) => (
          <p key={product.id}>{product.category}</p>
        ))}
    </div>
  );
};
