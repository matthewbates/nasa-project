import "./SignInElements.scss";
import React from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/Firebase/firebase";

export default function SignIn() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
    console.log(user);
  };

  return (
    <div className="form-container">
      <div className="sign-in-container">
        <div className="sign-in-wrapper">
          <h2>Sign In Page</h2>
          <h4>Sign in with your email and password</h4>
          <label>Email</label>
          <input type="text" />
          <label>Password</label>
          <input type="text" />
          <div className="btn-wrapper">
            <button className="btn">Sign in</button>
            <button className="btn" onClick={logGoogleUser}>
              Google sign in
            </button>
          </div>
        </div>
      </div>
      <div className="sign-up-container">
        <div className="sign-up-wrapper">
          <h2>I do not have an account</h2>
          <h4>Sign up with you email and pasword</h4>
          <label>Display Name</label>
          <input type="text" />
          <label>Email</label>
          <input type="text" />
          <label>Password</label>
          <input type="text" />
          <label>Confirm Password</label>
          <input type="text" />
          <div className="btn-wrapper">
            <button className="btn">Sign up</button>
          </div>
        </div>
      </div>
    </div>
  );
}
