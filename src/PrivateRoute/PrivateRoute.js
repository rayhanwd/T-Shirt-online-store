import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from './../App';
const PrivateRoute = ({children, ...rest}) => {
    const [logInUser, setLogInUser] = useContext(UserContext);
    return (
        <Route
      {...rest}
      render={({ location }) =>
      logInUser.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;