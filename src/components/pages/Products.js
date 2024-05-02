import React from "react";
import NavbarTwo from "../common/NavbarTwo";
import { useNavigate } from "react-router-dom";

import { useSidebarHoverContext } from "../Contexts/SidebarHoverContext";

const Products = () => {
  const navigate = useNavigate();
  const { setProduct } = useSidebarHoverContext();

  const handleClickProduct = (value) => {
    setProduct(value);
    navigate("/product-details");
  };
  return (
    <>
      <NavbarTwo />
      <div className="products about">
        <div className="container">
          <ul className="service_list">
            <li onClick={() => handleClickProduct("Research")}>
              <div>
                <img src="assets/Reserch.gif" alt="product-img" />
              </div>
            </li>
            <li onClick={() => handleClickProduct("Documentation")}>
              <div>
                <img src="assets/Documentation.gif" alt="product-img" />
              </div>
            </li>
            <li onClick={() => handleClickProduct("Frameworks")}>
              <div>
                <img src="assets/Frameworks.gif" alt="product-img" />
              </div>
            </li>
            <li onClick={() => handleClickProduct("userFeedback")}>
              <div>
                <img src="assets/userFeedback.gif" alt="product-img" />
              </div>
            </li>
            <li onClick={() => handleClickProduct("userOnboarding")}>
              <div>
                <img src="assets/userOnboarding.gif" alt="product-img" />
              </div>
            </li>
            <li onClick={() => handleClickProduct("userPersona")}>
              <div>
                <img src="assets/userPersona.gif" alt="product-img" />
              </div>
            </li>
            <li onClick={() => handleClickProduct("productStrategy")}>
              <div>
                <img src="assets/productStrategy.gif" alt="product-img" />
              </div>
            </li>
            <li onClick={() => handleClickProduct("userExperirnce")}>
              <div>
                <img src="assets/userExperience.gif" alt="product-img" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Products;
