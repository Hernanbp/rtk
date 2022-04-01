import { Filters } from "./components/Filters";
import { Products } from "./components/Products";
import { Header } from "./components/header/Header";
import "./App.css";

export const App = () => {
  return (
    <>
      <div className="app">
        <Header />
        <Filters />
        <Products />
      </div>
    </>
  );
};
