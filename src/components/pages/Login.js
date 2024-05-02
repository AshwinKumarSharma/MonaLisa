import React, { useState } from "react";
import LaptopContainer from "../common/LaptopContainer";

import { FcGoogle } from "react-icons/fc";
import NavbarTwo from "../common/NavbarTwo";
import { useCookies } from "react-cookie";

import SignIn from "../SignIn";
import SignUp from "../SignUp";
import { signInWithPopup } from "firebase/auth";
import { db, firebaseAuth, googleAuthProvider } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";

const Login = () => {
  const [register, setRegister] = useState(true);
  const [cookie, setCookie, removeCookie] = useCookies(["userData"]);

  const handleSignInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(firebaseAuth, googleAuthProvider);
      console.log("result auth provider", result);
      const user = firebaseAuth.currentUser;
      console.log("current user", user);
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          displayName: user.displayName,
        });
        setCookie("userData", user);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      <NavbarTwo />
      <section className="signin_wrapper">
        <div className="container">
          <div className="row align-items-center flex-md-row">
            <div className="col-md-6 mt-md-0">
              <div className="signin-left">
                <div className="left-inner">
                  <div className="sign-in-form active">
                    <h1>Let's get started</h1>
                    <div className="social-buttons">
                      <button
                        className="bg-light mt-lg-4"
                        style={{ color: "#0d6efd", cursor: "pointer" }}
                        onClick={handleSignInWithGoogle}
                      >
                        <FcGoogle
                          style={{
                            width: "1.5rem",
                            height: "1.5rem",
                            margin: "0 1rem",
                          }}
                        />
                        Continue with Google
                      </button>
                    </div>

                    {/* <div class="seperator">
                      <span>or continue with username/email</span>
                    </div> */}

                    {register ? (
                      <>
                        <SignIn />
                        <div className="create-aacount">
                          Not registered yet?
                          <span
                            className="text-underline register-btn sign-up-form-btn mx-1"
                            onClick={() => setRegister(!register)}
                          >
                            Create an Account
                          </span>
                        </div>
                      </>
                    ) : (
                      <>
                        <SignUp />
                        <div className="create-aacount">
                          Already have an account?
                          <span
                            className="text-underline register-btn  sign-up-form-btn mx-1"
                            onClick={() => setRegister(!register)}
                          >
                            Sign In
                          </span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <LaptopContainer />
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
