import { useDispatch, useSelector } from "react-redux";
import {
  getSelectedCategory,
  filterCategory,
} from "../features/filter/filterSlice";

export const Filter = ({ category }) => {
  const dispatch = useDispatch();

  const selecCategory = useSelector(getSelectedCategory);

  return (
    <span
      onClick={() =>
        dispatch(
          filterCategory(category),
          console.log(filterCategory(category))
        )
      }
      className={selecCategory === category ? "red" : "grey"}
    >
      {category}
    </span>
  );
};
