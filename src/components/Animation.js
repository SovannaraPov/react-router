import React from "react";
import { Route, Link } from "react-router-dom";

function Animation() {
  const AnimationItem = ({ match }) => <h1>{match.params.name}</h1>;
  return (
    <div>
      <h3>Animation Category :</h3>
      <ul>
        <li>
          <Link as={Link} to="/video/animation/action">
            Action
          </Link>
        </li>
        <li>
          <Link as={Link} to="/video/animation/romance">
            Romance
          </Link>
        </li>
        <li>
          <Link as={Link} to="/video/animation/comedy">
            Comedy
          </Link>
        </li>
      </ul>
      <Route path="/video/animation/:name" component={AnimationItem} />
    </div>
  );
}

export default Animation;
