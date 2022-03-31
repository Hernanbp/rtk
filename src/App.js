import { useState } from "react";
import "./App.css";
import { Filters } from "./components/Filters";
import { Products } from "./components/Products";
import { Spinner } from "./components/Spinner";

export const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 1000);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="app">
          <Filters />
          <Products />
        </div>
      )}
    </>
  );
};
