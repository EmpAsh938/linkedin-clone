import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { createAccount } from "../redux/postSlice";
import { auth } from "../firebase";

import "./Login.css";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photo, setPhoto] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const handleCreateAccount = (e) => {
    e.preventDefault();
    if (fullName && email && password.length > 5) {
      auth.createUserWithEmailAndPassword(email, password).then((userCreds) => {
        userCreds.user.updateProfile({
          displayName: fullName,
          photoURL: photo,
        });
      });
      dispatch(createAccount({ fname: fullName, mail: email, pass: password }));
      setFullName("");
      setEmail("");
      setPassword("");
      setPhoto("");
      history.push("/");
    }
  };

  return (
    <div className="account">
      <div className="account__wrapper">
        <div>
          <Link to="/">
            <img
              src="/images/login-image.png"
              alt="linkedin account"
              className="account__image"
            />
          </Link>
          <h2 className="account__title">
            Make the most of your professional life
          </h2>
        </div>
        <form className="account__form" onSubmit={handleCreateAccount}>
          <div className="account__input">
            <label htmlFor="fullname">Full name</label>
            <input
              type="text"
              id="fullname"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="account__input">
            <label htmlFor="photo">Profile Picture URL(optional)</label>
            <input
              type="text"
              id="photo"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
            />
          </div>
          <div className="account__input">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="account__input">
            <label htmlFor="password">Password (6 or more characters)</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <p className="account__agreement">
            By clicking, you agree to the Linkedin{" "}
            <span>User Agreement, Privacy Policy</span>, and{" "}
            <span>Cookie Policy</span>.
          </p>
          <button className="account__button" onClick={handleCreateAccount}>
            Create an account
          </button>
          <p className="account__agreement">
            Already have an account? <Link to="/login">Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
