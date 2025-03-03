import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const Navigation = (props) => {
  const navigate=useNavigate()
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

          <a className="navbar-brand page-scroll" href="#page-top">
            Core AI
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#" onClick={()=>{navigate("/")}} className="page-scroll">
                Home
              </a>
            </li>
            <li>
              <a href="#About" onClick={()=>{navigate("/")}} className="page-scroll">
                About
              </a>
            </li>
            <li>
              <a href="#services" onClick={()=>{navigate("/")}} className="page-scroll">
                Vison And Mission
              </a>

            </li>
            <li>
              <a
                href="#"
                onClick={()=>{navigate("/studentproject")}}
                className="page-scroll"
              >
                Student Projects
              </a>
            </li>
            <li>
              <a href="#portfolio" onClick={()=>{navigate("/")}} className="page-scroll">
                Gallary
              </a>
            </li>
            <li>
              <a href="#team" onClick={()=>{navigate("/")}} className="page-scroll">
                Team
              </a>
            </li>
            <li>
              <a href="#contact" onClick={()=>{navigate("/")}} className="page-scroll">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
