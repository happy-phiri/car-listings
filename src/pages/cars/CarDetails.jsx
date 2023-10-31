import React from "react";
import {
  Link,
  NavLink,
  Outlet,
  useParams,
  useLocation,
  useLoaderData,
} from "react-router-dom";
import getData from "../../api/api.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";

export function loader() {
  return getData();
}

const CarDetails = () => {
  const params = useParams();
  const location = useLocation();
  const currentCar = useLoaderData().find(
    (car) => car.id === Number(params.id)
  );

  return (
    <section className="details-wrapper my-5">
      <div className="container">
        <Link
          to={location.state ? `..?${location.state.search}` : ".."}
          relative="path"
          className="back-link">
          <FontAwesomeIcon icon={faRotateLeft} size="lg" className="me-2" />
          Back
        </Link>
        <div className="details mt-3">
          <div className="details-img">
            <img src={currentCar.imageUrl} alt={currentCar.model} />
          </div>

          <div>
            <div className="car-detail-nav">
              <NavLink to="." end className="btn btn-outline-warning btn-small">
                Overview
              </NavLink>
              <NavLink
                to="description"
                className="btn btn-outline-warning btn-small">
                Description
              </NavLink>
              <NavLink
                to="images"
                className="btn btn-outline-warning btn-small">
                Images
              </NavLink>
              <NavLink
                to="contact"
                className="btn btn-outline-warning btn-small">
                Contacts
              </NavLink>
            </div>
            <h3>{`${currentCar.make} ${currentCar.model} ${currentCar.year}`}</h3>
            <Outlet context={{ currentCar }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarDetails;
