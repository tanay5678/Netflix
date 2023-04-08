import React, { useState } from "react";
import "./css_screen/loginScreen.css";
import SignInScreen from "./SignInScreen";

function LoginScreen() {
  const [signIn, setsignIn] = useState(false);
  return (
    <div className="loginScreen">
      <div className="loginscreen__background">
        <div className="loginscreen__nav">
          <img
            className="loginscreen__logo"
            src="https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png"
            alt=""
          />
          <button
            className={signIn ? "no__show" : "loginscreen__button"}
            onClick={() => setsignIn(true)}
          >
            Sign In
          </button>
        </div>
      </div>

      <div className="loginscreen__gradient"></div>
      <div className="loginscreen__content">
        {signIn ? (
          <SignInScreen />
        ) : (
          <>
            <h1>Unlimited movies,TV shows and more.</h1>
            <h3>Watch anywhere. Cancle anytime</h3>
            <p>
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <div className="loginscreen_email">
              <input type="text" placeholder="Email Address" />
              <button onClick={() => setsignIn(true)}>Get Started</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
