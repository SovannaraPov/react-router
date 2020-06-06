import React, { Component } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Menu extends Component {
  render() {
    const style = {
      fontWeight: "bold",
      fontFamily: "Monospaced",
    };
    return (
      <div>
        <Navbar bg="light" style={style}>
          <Navbar.Brand as={Link} to="/">
            React-Router
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/video">
                Video
              </Nav.Link>
              <Nav.Link as={Link} to="/account">
                Account
              </Nav.Link>
              <Nav.Link as={Link} to="/auth">
                Auth
              </Nav.Link>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
