import React, { useState } from "react";
import { Link, useSearchParams, useLoaderData } from "react-router-dom";
import getData from "../../api/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export function loader() {
  return getData();
}

const Cars = () => {
  const cars = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  const [price, setPrice] = useState({ minPrice: "", maxPrice: "" });

  const typeFilters = searchParams.getAll("type");
  const makeFilters = searchParams.getAll("make");
  const minPriceFilter = searchParams.get("minPrice");
  const maxPriceFilter = searchParams.get("maxPrice");

  // SETS MULTIPLE PARAMS
  const handleFilterChange = (key, value) => {
    setSearchParams((prevParams) => {
      if (value === null || value === "") {
        prevParams.delete(key);
        if (key === "minPrice" || key === "maxPrice") {
          setPrice({ minPrice: "", maxPrice: "" });
        }
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  };

  // FUNCTION TO DISPLAY CARS BASED ON VARIOUS SEARCH PARAMETERS
  const displayedCars = cars.filter((car) => {
    return (
      (typeFilters.length === 0 || typeFilters.includes(car.type)) &&
      (makeFilters.length === 0 || makeFilters.includes(car.make)) &&
      (!minPriceFilter || car.price >= parseInt(minPriceFilter)) &&
      (!maxPriceFilter || car.price <= parseInt(maxPriceFilter))
    );
  });

  // INDIVIDUAL CARD ITEMS FOR ALL CARS
  const carListItems = displayedCars.map((car) => {
    const { id, make, model, condition, price, imageUrl, year } = car;
    return (
      <div key={id} className="mt-2">
        <Link
          className="link"
          to={id.toString()}
          state={{ search: searchParams.toString() }}>
          <div className="card">
            <div className="image-container">
              <img src={imageUrl} alt={model} />
            </div>
            <div className="car-preview">
              <h2>{`${make} ${model} ${year}`}</h2>
              <p className="price">${price.toLocaleString()}</p>
              <p>Condition: {condition}</p>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  // GENERATES ARRAYS WITH UNIQUE ITEMS FOR FILTERING TO AVOID REPEATED VALUES E.G [TOYOTA, MAZDA, TOYOTA]
  const generateUniqueArray = (arr, key) => {
    const uniqueItems = Array.from(new Set(arr.map((item) => item[key])));
    return uniqueItems;
  };

  const carTypes = generateUniqueArray(cars, "type");
  const carMakes = generateUniqueArray(cars, "make");

  // CAPTURES INPUT VALUES FOR MIN AND MAX VALUES AND SETS PRICE STATE
  const handlePriceChange = (e) => {
    const value = e.target.value;
    setPrice((prevState) => {
      return {
        ...prevState,
        [e.target.name]: value,
      };
    });
  };

  // HANDLES FORM SUBMIT AND SETS SEARCH PARAMETERS FOR MIN AND MAX PRICE
  const handleSubmit = (e) => {
    e.preventDefault();
    handleFilterChange(
      "minPrice",
      price.minPrice ? parseInt(price.minPrice) : null
    );
    handleFilterChange(
      "maxPrice",
      price.maxPrice ? parseInt(price.maxPrice) : null
    );
  };

  return (
    <section>
      <h1 className="container mt-5 mb-3">Explore our catalogue of cars</h1>
      <div className="container mb-5 cars">
        <div className="accordion my-2" id="accordionExample">
          <h2>Filter By:</h2>
          {/* FILTER BY TYPE */}
          <div className="accordion-item">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne">
              Type
            </button>
            <div className="filters">
              {carTypes.map((car) => {
                return (
                  <div
                    key={carTypes.indexOf(car)}
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <button
                        onClick={() => handleFilterChange("type", car)}
                        className={`btn btn-outline-secondary btn-small ${
                          typeFilters.includes(car) ? "active" : ""
                        }`}>
                        {car}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* FILTER BY MAKE */}
          <div className="accordion-item">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo">
              Make
            </button>
            <div className="filters">
              {carMakes.map((car) => {
                return (
                  <div
                    key={carMakes.indexOf(car)}
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <button
                        onClick={() => handleFilterChange("make", car)}
                        className={`btn btn-outline-secondary btn-small ${
                          makeFilters.includes(car) ? "active" : ""
                        }`}>
                        {car}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* PRICE FILTER */}
          <div className="accordion-item">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="true"
              aria-controls="collapseThree">
              Price
            </button>
            <div className="filters">
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="min-price" className="form-label">
                        Min
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="min-price"
                        name="minPrice"
                        value={price.minPrice}
                        onChange={handlePriceChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="max-price" className="form-label">
                        Max
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="max-price"
                        name="maxPrice"
                        value={price.maxPrice}
                        onChange={handlePriceChange}
                      />
                    </div>
                    <button type="submit" className="btn btn-outline-secondary">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {typeFilters.length > 0 ||
          makeFilters.length > 0 ||
          minPriceFilter ||
          maxPriceFilter ? (
            <button
              onClick={() => {
                handleFilterChange("type", null);
                handleFilterChange("make", null);
                handleFilterChange("minPrice", null);
                handleFilterChange("maxPrice", null);
              }}
              className="btn btn-outline-danger btn-small my-2">
              Reset <FontAwesomeIcon icon={faTrash} className="ms-2" />
            </button>
          ) : null}
        </div>
        <div className="car-list">
          {displayedCars.length === 0 ? (
            <h3>No items matched your search</h3>
          ) : (
            carListItems
          )}
        </div>
      </div>
    </section>
  );
};

export default Cars;
