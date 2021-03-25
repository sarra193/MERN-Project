import React from 'react'
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';


const PrivateRoute = ({ component: Component, ...rest }) => {

      const isAuth = useSelector(state => state.userReducer.isAuth)

      if (!isAuth) return <Redirect to="/login" />;
      return <Route {...rest} render={(props) => <Component {...props} />} />;
};

export default PrivateRoute;
