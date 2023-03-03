import "./NavigationElements.scss";
import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

const Crown = require("../../assets/crown.png");

export default function Navigation() {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img style={{ height: "100%", width: "100%" }} src={Crown} />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/signIn">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}
