import React from "react";
import data from "./data";

const ProductItem = () => {
  console.log(data);

  return (
    <div>
      <h1>Animals(task3)</h1>
      {data.map((animal) => (
        <>
          <div key={animal.name}>{animal.name}</div>
          <div key={animal.size}>{animal.size}</div>
          <div key={animal.diet}>{animal.diet}</div>
          <div key={animal.scientificName}>{animal.scientificName}</div>
        </>
      ))}
    </div>
  );
};

export default ProductItem;
