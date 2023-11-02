import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "@firebase/auth";
import { auth } from "../../firebase";
import { Navigate, useNavigate } from "react-router-dom";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
        navigate("/kanban");
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  function userSignOut() {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
        navigate("/");
      })
      .catch((error) => console.log(error));
  }

  return (
    <div>
      {authUser ? (
        <>
          <p>{`signed in as ${authUser.email}`}</p>
          <button onClick={userSignOut}>sign out</button>
        </>
      ) : (
        <p>signed out</p>
      )}
    </div>
  );
};

export default AuthDetails;
