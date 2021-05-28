import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

// helper routes
import { ProtectedRoute } from "./helper/routes";

import "./App.css";

const App = () => {
  const isLoggedIn = useSelector((state) => state.posts.isLoggedIn);
  return (
    <Router>
      <Switch>
        <ProtectedRoute exact isUserLogged={isLoggedIn} path="/">
          <Home />
        </ProtectedRoute>

        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
