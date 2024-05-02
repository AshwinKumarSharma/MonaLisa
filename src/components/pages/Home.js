import React from "react";
import Navbar from "../common/Navbar";
import { useNavigate } from "react-router-dom";
import LaptopContainer from "../common/LaptopContainer";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <section className="about">
        <div className="container">
          <div className="row align-items-center gy-4">
            <div className="col-md-6">
              <div className="about_content">
                <h1 className="main-heading">
                  Do your best work, all in one place
                </h1>
                <button
                  className="btn btn-primary py-2 px-4 fs-5"
                  onClick={() => navigate("/login")}
                >
                  Start Free Trial
                </button>
              </div>
            </div>
            <LaptopContainer />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
