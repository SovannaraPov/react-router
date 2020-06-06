import React from "react";
import { Route, Link } from "react-router-dom";

function Movie() {
  const MovieItem = ({ match }) => <h1>{match.params.name}</h1>;
  return (
    <div>
      <h3>Movie Category :</h3>
      <ul>
        <li>
          <Link as={Link} to="/video/movie/adventure">
            Adventure
          </Link>
        </li>
        <li>
          <Link as={Link} to="/video/movie/comedy">
            Comedy
          </Link>
        </li>
        <li>
          <Link as={Link} to="/video/movie/crime">
            Crime
          </Link>
        </li>
        <li>
          <Link as={Link} to="/video/movie/documentary">
            Documentary
          </Link>
        </li>
      </ul>
      <Route path="/video/movie/:name" component={MovieItem} />
    </div>
  );
}

export default Movie;
