import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-light" style={{ backgroundColor: "#fff" }}>
      <div className="container-fluid">
        <div className="d-flex align-items-center">
          <img src="assets/logo.svg" alt="logo" />
          <div className="">
            <span className="mx-2" style={{ color: "rgb(168 160 160)" }}>
              Solutions
            </span>
            <span className="mx-2" style={{ color: "rgb(168 160 160)" }}>
              Products
            </span>
          </div>
        </div>
        <div className="d-flex">
          <button className="btn mx-2" style={{ color: "#0d6efd" }}>
            Admin Console
          </button>
          <button className="btn btn-outline-primary mx-2">
            Contact Sales
          </button>
          <button
            className="btn btn-primary mx-2"
            onClick={() => navigate("/login")}
          >
            Start Free trial
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
