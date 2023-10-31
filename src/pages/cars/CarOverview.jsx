import React from "react";
import { useOutletContext } from "react-router-dom";

const CarOverview = () => {
  const { currentCar } = useOutletContext();

  return (
    <div className="overview">
      <p>Year: {currentCar.year}</p>
      <p>Engine: {currentCar.engineCapacity}</p>
      <p>Condition: {currentCar.condition}</p>
      <p>Type: {currentCar.type}</p>
      <p>
        Price: <span className="price">${currentCar.price}</span>
      </p>
    </div>
  );
};

export default CarOverview;
