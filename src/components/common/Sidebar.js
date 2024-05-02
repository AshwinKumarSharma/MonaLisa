import React, { useContext } from "react";
import { IoLogOutOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { SidebarHoverContext } from "../Contexts/SidebarHoverContext";
import { useCookies } from "react-cookie";

import { firebaseAuth } from "../../firebase";

const Sidebar = () => {
  const navigate = useNavigate();
  const { isHovered, setIsHovered, product, setProduct } =
    useContext(SidebarHoverContext);

  const [cookie, removeCookie] = useCookies(["userData"]);

  const handleLogout = async () => {
    try {
      await firebaseAuth.signOut();
      removeCookie("userData");
      navigate("/login");
    } catch (error) {
      console.log("Error logging out", error.message);
    }
  };
  return (
    <div
      className={`sideNav ${isHovered ? "sideNavOpen" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="username">
        <FaRegUserCircle />
        <span className="product_name mt-2">
          {cookie?.userData?.displayName}
        </span>
      </div>
      <div>
        <ul>
          <li
            className={`${
              product === "Research" ? "sidebarListItemActive" : ""
            }`}
            onClick={() => setProduct("Research")}
          >
            <img alt="product-img" src="assets/Reserch.gif" />
            <span className="product_name">Research</span>
          </li>
          <li
            className={`${
              product === "Documentation" ? "sidebarListItemActive" : ""
            }`}
            onClick={() => setProduct("Documentation")}
          >
            <img alt="product-img" src="assets/Documentation.gif" />
            <span className="product_name">Documentation</span>
          </li>
          <li
            className={`${
              product === "Frameworks" ? "sidebarListItemActive" : ""
            }`}
            onClick={() => setProduct("Frameworks")}
          >
            <img alt="product-img" src="assets/Frameworks.gif" />
            <span className="product_name">Frameworks</span>
          </li>
          <li
            className={`${
              product === "userFeedback" ? "sidebarListItemActive" : ""
            }`}
            onClick={() => setProduct("userFeedback")}
          >
            <img alt="product-img" src="assets/userFeedback.gif" />
            <span className="product_name">User Feedback</span>
          </li>
          <li
            className={`${
              product === "userOnboarding" ? "sidebarListItemActive" : ""
            }`}
            onClick={() => setProduct("userOnboarding")}
          >
            <img alt="product-img" src="assets/userOnboarding.gif" />
            <span className="product_name">User Onboarding</span>
          </li>
          <li
            className={`${
              product === "userPersona" ? "sidebarListItemActive" : ""
            }`}
            onClick={() => setProduct("userPersona")}
          >
            <img alt="product-img" src="assets/userPersona.gif" />
            <span className="product_name">User Persona</span>
          </li>
          <li
            className={`${
              product === "productStrategy" ? "sidebarListItemActive" : ""
            }`}
            onClick={() => setProduct("productStrategy")}
          >
            <img alt="product-img" src="assets/productStrategy.gif" />
            <span className="product_name">Product Strategy</span>
          </li>
          <li
            className={`${
              product === "userExperirnce" ? "sidebarListItemActive" : ""
            }`}
            onClick={() => setProduct("userExperirnce")}
          >
            <img alt="product-img" src="assets/userExperience.gif" />
            <span className="product_name">User Experirnce</span>
          </li>
        </ul>
      </div>
      <div className="logout_btn">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleLogout}
        >
          <IoLogOutOutline className="Logout_icon" />
          <span className="product_name">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
