import React from "react";
import { Route, Link } from "react-router-dom";
import Animation from "./Animation";
import Movie from "./Movie";

const Topic = ({ match }) => {
  if (match.params.name === "animation") {
    return <Route path="/video/animation" component={Animation} />;
  } else if (match.params.name === "movie") {
    return <Route path="/video/movie" component={Movie} />;
  }
};

class Video extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center">Videos</h1>
        <h3>Please Select A Topic :</h3>
        <ul>
          <li>
            <Link as={Link} to={`/video/animation`}>
              Animation
            </Link>
          </li>
          <li>
            <Link as={Link} to={`/video/movie`}>
              Movie
            </Link>
          </li>
        </ul>
        <Route path="/video/:name" component={Topic} />
      </div>
    );
  }
}

export default Video;
