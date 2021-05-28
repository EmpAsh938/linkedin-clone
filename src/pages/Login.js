import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import { loggedIn } from "../redux/postSlice";
import { auth } from "../firebase";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleJoin = (e) => {
    e.preventDefault();

    if (email && password.length > 5) {
      auth
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          dispatch(
            loggedIn({
              userCreds: { mail: email, pass: password },
            })
          );
          history.push("/");
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
      setEmail("");
      setPassword("");
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
        <form className="account__form" onSubmit={handleJoin}>
          {errorMessage && (
            <p
              style={{
                padding: ".3em",
                background: "orange",
                color: "#fff",
                fontSize: ".89rem",
              }}
            >
              {errorMessage}
            </p>
          )}
          <div className="account__input">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="account__input">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="account__button" onClick={handleJoin}>
            Join
          </button>
          <p className="account__agreement">
            New to Linkedin? <Link to="signup">Create an account</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
