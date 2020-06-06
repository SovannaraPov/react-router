import React from "react";

function Post({ match, products }) {
  return (
    <div>
      <h1 className="text-center">This content from post {match.params.id}</h1>
    </div>
  );
}

export default Post;
