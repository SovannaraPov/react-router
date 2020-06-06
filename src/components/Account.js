import React, { Component } from "react";
import { Link } from "react-router-dom";
import queryString from "query-string";

export default class Account extends Component {
  render() {
    let str = queryString.parse(this.props.location.search);
    return (
      <div className="container">
        <h1 className="text-center">Accounts</h1>
        <ul>
          <li>
            <Link as={Link} to="/account?name=netflix">
              Netflix
            </Link>
          </li>
          <li>
            <Link as={Link} to="/account?name=facebook">
              Facebook
            </Link>
          </li>
          <li>
            <Link as={Link} to="/account?name=yahoo">
              Yahoo
            </Link>
          </li>
          <li>
            <Link as={Link} to="/account?name=google">
              Google
            </Link>
          </li>
        </ul>
        {str.name ? (
          <h3>
            The <span style={{ color: "purple" }}>name</span> in the query
            string is "{str.name}"
          </h3>
        ) : (
          <h3>There is no name in the query string</h3>
        )}
      </div>
    );
  }
}
