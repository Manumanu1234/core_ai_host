import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>

          <Link className="navbar-brand page-scroll" to="/#page-top">
            Core AI
          </Link>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/#page-top" className="page-scroll">
                Home
              </Link>
            </li>
            <li>
              <Link to="/#About" className="page-scroll">
                About
              </Link>
            </li>
            <li>
              <Link to="/#services" className="page-scroll">
                Vision And Mission
              </Link>

            </li>
            <li>
              <Link to="/studentproject" className="page-scroll">
                Student Projects
              </Link>
            </li>
            <li>
              <Link to="/#portfolio" className="page-scroll">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/#team" className="page-scroll">
                Team
              </Link>
            </li>
            <li>
              <Link to="/#contact" className="page-scroll">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
