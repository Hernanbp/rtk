import React from "react";
import { Filter } from "./Filter";

const categories = ["Vegetales", "Frutas", "All"];

export const Filters = () => {
  return (
    <div>
      <b>Elegir Categoria:</b>
      <div className="filters">
        {categories.map((category) => (
          <Filter key={category} category={category} />
        ))}
      </div>
    </div>
  );
};
