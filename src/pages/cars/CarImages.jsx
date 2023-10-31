import React from "react";
import { useOutletContext } from "react-router-dom";

const CarImages = () => {
  const { currentCar } = useOutletContext();

  return (
    <div>
      <img
        src={currentCar.imageUrl}
        alt={currentCar.model}
        style={{ width: "150px", borderRadius: "5px" }}
      />
    </div>
  );
};

export default CarImages;
