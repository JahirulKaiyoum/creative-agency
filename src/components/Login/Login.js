import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import * as firebase from "firebase/app";
import "firebase/auth";
import "./Login.css";
import logo from "../Home/Header/logo.png";
import { useHistory, useLocation } from "react-router-dom";
import firebaseConfig from "./firebase.config";
import { UserContext } from "../../App";

const Login = () => {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const handleSignIn = () => {
    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
    }
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        const { displayName, email, photoURL } = result.user;

        fetch(
          `https://mysterious-ocean-37435.herokuapp.com/checkAdmin?email=${email}`
        )
          .then((response) => response.json())
          .then((data) => {
            if (data) {
              const signedInUser = {
                checkAdmin: true,
                name: displayName,
                email: email,
                image: photoURL,
              };
              setLoggedInUser(signedInUser);
              history.replace(from);
            } else {
              const signedInUser = {
                checkAdmin: false,
                name: displayName,
                email: email,
                image: photoURL,
              };
              setLoggedInUser(signedInUser);
              history.replace(from);
            }
          });
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
      });
  };

  // const handleSignIn = () => {
  //     if (firebase.apps.length===0) {
  //         firebase.initializeApp(firebaseConfig);
  //     }
  //     var provider = new firebase.auth.GoogleAuthProvider();
  //     firebase.auth().signInWithPopup(provider).then(function(result) {
  //         const { displayName, email, photoURL } = result.user;

  //         const signedInUser = {
  //             isSignedIn: true,
  //             name: displayName,
  //             email: email,
  //             image:photoURL,
  //         }
  //         setLoggedInUser(signedInUser);
  //         history.replace(from);
  //     }).catch(function(error) {
  //         var errorCode = error.code;
  //         var errorMessage = error.message;

  //         var email = error.email;

  //         var credential = error.credential;

  //     });
  //     console.log(loggedInUser.image);

  // }
  return (
    <section style={{ paddingTop: "60px" }}>
      <div className="row">
        <div className="col-md-2 offset-md-5 ">
          <img src={logo} className="img-fluid" alt="" />
        </div>
        <div className="col-md-4 offset-md-4 login-form">
          <h1 className="text-center">Login with </h1>
          <Button className="text-center log-btn" onClick={handleSignIn}>
            Continue with Google
          </Button>
          <p className="text-center text">
            Don't have an account ? <span>Creat an account</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;

// const handleSignIn = () => {
//     if (firebase.apps.length===0) {
//         firebase.initializeApp(firebaseConfig);
//     }
//     var provider = new firebase.auth.GoogleAuthProvider();
//     firebase.auth().signInWithPopup(provider).then(function(result) {
//         const { displayName, email, photoURL } = result.user;

//         const signedInUser = {
//             isSignedIn: true,
//             name: displayName,
//             email: email,
//             image:photoURL,
//         }
//         setLoggedInUser(signedInUser);
//         history.replace(from);
//       }).catch(function(error) {
//         var errorCode = error.code;
//         var errorMessage = error.message;

//         var email = error.email;

//         var credential = error.credential;

//       });
//     console.log(loggedInUser.image);

// }

// const handleSignIn = () => {
//     if (firebase.apps.length===0) {
//         firebase.initializeApp(firebaseConfig);
//     }
//     var provider = new firebase.auth.GoogleAuthProvider();
//     firebase.auth().signInWithPopup(provider).then(function(result) {
//         const { displayName, email, photoURL } = result.user;

//         const signedInUser = {
//             isSignedIn: true,
//             name: displayName,
//             email: email,
//             image:photoURL,
//         }
//         setLoggedInUser(signedInUser);
//         history.replace(from);
//       }).catch(function(error) {
//         var errorCode = error.code;
//         var errorMessage = error.message;

//         var email = error.email;

//         var credential = error.credential;

//       });
//     console.log(loggedInUser.image);

// }
