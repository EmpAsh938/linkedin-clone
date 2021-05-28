import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch } from "react-router-dom";

// pages
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

// helper route
import { ProtectedRoute, UserRedirect } from "./helper/routes";

import "./App.css";
import { createAccount } from "./redux/postSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const checkLocalStorage = JSON.parse(localStorage.getItem("UserCred"));
    if (checkLocalStorage) {
      dispatch(
        createAccount({
          fname: checkLocalStorage.displayName,
          mail: checkLocalStorage.email,
          pic: checkLocalStorage.photoURL,
        })
      );
    }
  }, []);

  const isLoggedIn = useSelector((state) => state.posts.isLoggedIn);
  return (
    <Router>
      <Switch>
        <ProtectedRoute exact isUserLogged={isLoggedIn} path="/">
          <Home />
        </ProtectedRoute>

        <UserRedirect isUserLogged={isLoggedIn} path="/login">
          <Login />
        </UserRedirect>
        <UserRedirect isUserLogged={isLoggedIn} path="/signup">
          <SignUp />
        </UserRedirect>
      </Switch>
    </Router>
  );
};

export default App;
