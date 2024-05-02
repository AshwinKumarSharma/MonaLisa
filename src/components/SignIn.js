import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { firebaseAuth } from "../firebase";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const {
    handleSubmit,
    register: register1,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (data) => {
    setLoader(true);
    console.log("handle Login Data", data);
    try {
      await signInWithEmailAndPassword(
        firebaseAuth,
        data?.email,
        data?.password
      );
      console.log("User Login Successfully");
      setLoader(false);
      navigate("/products");
    } catch (error) {
      console.log("error message", error.message);
    }
  };
  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <div class="form-group">
        <input
          type="email"
          {...register1("email", {
            required: "Field is required",
          })}
          placeholder="Email"
        />
        {errors && (
          <span className="text-danger fs-6 mx-2">
            {errors?.email?.message}
          </span>
        )}
      </div>
      <div class="form-group">
        <input
          type="password"
          {...register1("password", {
            required: "Field is required",
          })}
          // class="error"
          placeholder="Password"
        />
        {errors && (
          <span className="text-danger fs-6 mx-2">
            {errors?.password?.message}
          </span>
        )}
      </div>

      <div class="form-group">
        <button type="submit">
          {loader ? (
            <div class="spinner-border text-light" role="status">
              <span class="sr-only"></span>
            </div>
          ) : (
            "SIGN IN"
          )}
        </button>
      </div>
    </form>
  );
};

export default SignIn;
