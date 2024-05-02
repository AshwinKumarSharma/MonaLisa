import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { firebaseAuth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";

const SignUp = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset: reset1,
    setValue,
    getValue,
    watch,
  } = useForm({ mode: "onBlur" });
  const [loader, setLoader] = useState(false);

  const handleSignUp = async (data) => {
    setLoader(true);
    console.log("handle Sign Up Data", data);
    try {
      await createUserWithEmailAndPassword(
        firebaseAuth,
        data?.email,
        data?.password
      );
      const user = firebaseAuth.currentUser;
      console.log("current user", user);
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          displayName: data?.firstName + " " + data?.lastName,
        });
      }
      setLoader(false);
      console.log("User registered Successfully");
      toast.success("User Registered Successfully", {
        position: "top-center",
      });
    } catch (error) {
      console.log("error message", error.message);
      toast.success(error.message, {
        position: "top-right",
      });
    }
  };
  return (
    <form onSubmit={handleSubmit(handleSignUp)}>
      <div class="form-group">
        <input
          type="text"
          {...register("firstName", {
            required: "Field is required",
          })}
          placeholder="First Name"
        />
        {errors && (
          <span className="text-danger fs-6 mx-2">
            {errors?.firstName?.message}
          </span>
        )}
      </div>
      <div class="form-group">
        <input
          type="text"
          {...register("lastName", {
            required: "Field is required",
          })}
          placeholder="Last Name"
        />
        {errors && (
          <span className="text-danger fs-6 mx-2">
            {errors?.lastName?.message}
          </span>
        )}
      </div>
      <div class="form-group">
        <input
          type="email"
          {...register("email", {
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
          {...register("password", {
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
            "SIGN UP"
          )}
        </button>
      </div>
    </form>
  );
};

export default SignUp;
