import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from 'react-redux';

function PrivateRoute({ component: Component, ...rest }) {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin;

  return (
    <Route
      {...rest}
      render={(props) => {
        if (userInfo && userInfo.isAdmin) {
          return <Component {...props} />;
        } else {
          return <Redirect to={`/login`} />;
        }
      }}
    />
  );
}

export default PrivateRoute;
