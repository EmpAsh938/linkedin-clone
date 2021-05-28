import { Route, Redirect } from "react-router-dom";

export function ProtectedRoute({ isUserLogged, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (isUserLogged) {
          return children;
        }
        return (
          <Redirect
            to={{
              pathname: "login",
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
}
