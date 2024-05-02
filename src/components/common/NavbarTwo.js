import React, { useEffect, useState } from "react";
import { useUserContext } from "../Contexts/UserContext";
import { useLocation, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { IoLogOutOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { db, firebaseAuth } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useSidebarHoverContext } from "../Contexts/SidebarHoverContext";

const NavbarTwo = () => {
  const { setUserData } = useUserContext();
  const { isHovered, setIsHovered } = useSidebarHoverContext();
  const [userDetails, setUserDetails] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(["userData"]);
  const navigate = useNavigate();
  const location = useLocation();

  const fetchUserData = async () => {
    firebaseAuth.onAuthStateChanged(async (user) => {
      console.log("NAVBAR TWO USER", user);
      if (user) {
        const docRef = doc(db, "Users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setUserData(docSnap.data());
          setUserDetails(docSnap.data());
          setCookie("userData", docSnap.data());
        } else {
          console.log("User is not logged in");
        }
      }
    });
  };

  const handleLogout = async () => {
    try {
      await firebaseAuth.signOut();
      removeCookie("userData");
      navigate("/login");
    } catch (error) {
      console.log("Error logging out", error.message);
    }
  };

  useEffect(() => {
    fetchUserData();
    console.log("user Data UseEffect", userDetails);
  }, []);

  return (
    <nav
      className="navbar navbar-light"
      style={{
        backgroundColor: "#fff",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
      }}
    >
      <div className="container-fluid justify-content-start justify-content-md-center py-2">
        <div
          className="d-flex align-items-center justify-content-center"
          onClick={() => navigate("/")}
        >
          <img src="assets/logo.svg" alt="logo" />
        </div>
        {location?.pathname === "/products" ? (
          userDetails ? (
            <div
              className="dropdown"
              style={{ position: "absolute", right: "30px" }}
            >
              <button
                className="btn btn-outline-primary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {userDetails?.displayName}
              </button>
              <ul className="dropdown-menu" style={{ cursor: "pointer" }}>
                <li>
                  <span
                    onClick={() => {
                      handleLogout();
                    }}
                    className="dropdown-item"
                    href="#"
                  >
                    Logout
                  </span>
                </li>
              </ul>
            </div>
          ) : null
        ) : location?.pathname === "/product-details" ? (
          <div className="input-group rounded search_btn">
            {/* <input
              type="search"
              class="form-control rounded search_input"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <span className="search_icon">
              <IoSearch />
            </span> */}
          </div>
        ) : null}

        <div
          className="logout d-lg-none d-md-none"
          onClick={() => {
            handleLogout();
          }}
        >
          <IoLogOutOutline className="Logout_icon" />
        </div>
        <div className="hambureger" onClick={() => setIsHovered(!isHovered)}>
          <RxHamburgerMenu />
        </div>
      </div>
    </nav>
  );
};

export default NavbarTwo;
