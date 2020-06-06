import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/Menu";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Main from "./components/Main";
import Home from "./components/Home";
import Post from "./components/Post";
import Video from "./components/Video";
import Account from "./components/Account";
import Auth from "./components/Auth";
import Welcome from "./components/Welcome";
import NotFound from "./components/NotFound";

export default class App extends Component {
  state = {
    products: [
      {
        id: 1,
        name: "Macbook Pro 12 2018",
        description: "This is product description.",
        image:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.idgesg.net%2Fimages%2Farticle%2F2018%2F11%2Fmacbook-air-2108-hero2-100779122-orig.jpeg&f=1&nofb=1",
        updatedAt: "Last updated 3 mins ago",
      },
      {
        id: 2,
        name: "Macbook Pro 13 2018",
        description: "This is product description.",
        image:
          "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn2.macworld.co.uk%2Fcmsdata%2Freviews%2F3660144%2Fmacbook_pro_201700.jpg&f=1&nofb=1",
        updatedAt: "Last updated 5 mins ago",
      },
      {
        id: 3,
        name: "Macbook Pro 15 2018",
        description: "This is product description.",
        image:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.idgesg.net%2Fimages%2Farticle%2F2018%2F07%2F2018-macbook-pro-01-100764568-large.jpg&f=1&nofb=1",
        updatedAt: "Last updated 7 mins ago",
      },
      {
        id: 4,
        name: "Macbook Pro 16 2018",
        description: "This is product description.",
        image:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.mos.cms.futurecdn.net%2FqdDzHthkxGHE4vicDf5yx6-1200-80.jpg&f=1&nofb=1",
        updatedAt: "Last updated 9 mins ago",
      },
      {
        id: 5,
        name: "Macbook Mini 2018",
        description: "This is product description.",
        image:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.macworld.co.uk%2Fcmsdata%2Ffeatures%2F3699859%2Fapple_mac_mini_2018_review.jpg&f=1&nofb=1",
        updatedAt: "Last updated 11 mins ago",
      },
      {
        id: 6,
        name: "Mac Trash 2018",
        description: "This is product description.",
        image:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn01.vulcanpost.com%2Fwp-uploads%2F2019%2F06%2FWWDCMacPro.jpg&f=1&nofb=1",
        updatedAt: "Last updated 13 mins ago",
      },
    ],
  };

  render() {
    return (
      <div>
        <Router>
          <Menu />
          <Switch>
            {/* Main Page */}
            <Route path="/" exact component={Main} />

            {/* Home Page */}
            <Route
              path="/home"
              render={() => <Home products={this.state.products} />}
            />
            <Route
              path="/posts/:id"
              render={(props) => (
                <Post {...props} products={this.state.products} />
              )}
            />

            {/* Video Page */}
            <Route path="/video" component={Video} />

            {/* Account Page */}
            <Route path="/account" component={Account} />

            {/* Authentication Page */}
            <Route path="/auth" component={Auth} />

            <Redirect from="/welcome" to="/auth" />

            {/* Error Page */}
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}
