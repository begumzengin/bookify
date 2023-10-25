import { createUserWithEmailAndPassword } from "@firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import rubberPlant from "../../rubber-plant.png";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((useCredential) => {
        console.log(useCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="title-container">
        <h1 className="app-title">bookify</h1>
        <img className="app-logo" src={rubberPlant} alt="app logo" />
      </div>
      <br />
      <div>
        <form onSubmit={signUp}>
          <div className="login-header">
            <h2 className="p-5 mb-5">create a bookify account</h2>
            <input
              className="border border-pinkerBackgroundColor rounded-lg w-[300px]"
              type="email"
              placeholder=" enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <br />
            <input
              className="border border-pinkerBackgroundColor rounded-lg w-[300px]"
              type="password"
              placeholder=" enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <br />
            <button
              type="submit"
              className="border border-columnBackgroundColor rounded-md bg-pinkerBackgroundColor text-backgroundColor w-[100px]"
            >
              sign up
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
