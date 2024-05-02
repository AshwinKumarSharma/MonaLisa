import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Login from "./components/pages/Login";

import ProductDetailPage from "./components/common/ProductDetailPage";
import Products from "./components/pages/Products";
import { useEffect } from "react";
import { useSidebarHoverContext } from "./components/Contexts/SidebarHoverContext";
import { useUserContext } from "./components/Contexts/UserContext";
import { firebaseAuth } from "./firebase";
import { ToastContainer } from "react-toastify";

function App() {
  const { isHovered, setIsHovered } = useSidebarHoverContext();
  const { userData, setUserData } = useUserContext();
  useEffect(() => {
    firebaseAuth.onAuthStateChanged((user) => {
      setUserData(user);
    });
  });

  return (
    <div className={`${isHovered ? "app" : ""}`}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={userData ? <Navigate to="/products" /> : <Login />}
          />

          <Route
            path="/product-details"
            element={
              userData ? <ProductDetailPage /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/products"
            element={userData ? <Products /> : <Navigate to="/login" />}
          />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
