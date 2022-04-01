import React from "react";
import { Filter } from "./Filter";

const categories = [
  "electronics",
  "women's clothing",
  "men's clothing",
  "jewelery",
  "All",
];

export const Filters = () => {
  return (
    <div className="filters-cont">
      <b>Categories:</b>
      <div className="filters">
        {categories.map((category) => (
          <Filter key={category} category={category} />
        ))}
      </div>
    </div>
  );
};
