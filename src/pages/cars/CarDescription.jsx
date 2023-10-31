import React from "react";
import { useOutletContext } from "react-router-dom";

const CarDescription = () => {
  const { currentCar } = useOutletContext();

  return (
    <div>
      <p>{currentCar.description}</p>
    </div>
  );
};

export default CarDescription;
