import React, { useRef } from "react";
import "./css_screen/signinScreen.css";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

function SignInScreen() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((e) => {
        alert(e.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((e) => {
        alert(e.message);
      });
  };
  return (
    <div className="signInScreen">
      <h1>Sign In</h1>
      <form action="" className="form__content">
        <input
          ref={emailRef}
          type="email"
          placeholder="Email (use demo@demo.com) "
        />
        <input
          ref={passwordRef}
          type="password"
          placeholder="Password (use demo@1234)"
        />
        <input type="submit" value="Sign In" id="form__btn" onClick={signIn} />
        <h4>
          <span className="signUpScreen__grey">New to Netflix ? </span>
          <span className="signUpScreen__link" onClick={register}>
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignInScreen;
