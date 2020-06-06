import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home({ products }) {
  let productList = products.map((products) => (
    <Card key={products.id} style={{ margin: 20 }}>
      <Card.Img
        variant="top"
        src={products.image}
        style={{ width: 320, height: 160 }}
        alt="Thumnail"
      />
      <Card.Body>
        <Card.Title>{products.name}}</Card.Title>
        <Card.Text>{products.description}</Card.Text>
        <Link as={Link} to={`/posts/${products.id}`}>
          See More
        </Link>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">{products.updatedAt}</small>
      </Card.Footer>
    </Card>
  ));

  return (
    <div>
      <div className="container">
        <h1 className="text-center">Home</h1>
        <div className="row">{productList}</div>
      </div>
    </div>
  );
}

export default Home;
