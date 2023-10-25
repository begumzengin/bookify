import { signInWithEmailAndPassword } from "@firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const logIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((useCredential) => {
        console.log(useCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div>
        <form onSubmit={logIn}>
          <div className="login-header">
            <h2 className="p-5 mb-5">log in to your bookify account</h2>
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
              log in
            </button>
            <br />
            <h4>if you don't have a bookify account yet: </h4>
            <Link
              to="/sign-up"
              className="border border-columnBackgroundColor bg-pinkerBackgroundColor rounded-md text-backgroundColor w-[100px] text-center"
            >
              sign up
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
