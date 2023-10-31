import React from "react";
import { Link, useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="container error-page">
      <h1>
        {Error.status && Error.statusText
          ? Error.status - Error.statusText
          : ""}
      </h1>
      <pre>Sorry, page you're looking does not exist</pre>
      <Link to="/">Back to Home Page</Link>
    </div>
  );
};

export default NotFound;
