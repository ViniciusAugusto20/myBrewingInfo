import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useAuthContext } from '../context/auth';

const PrivateRoute: React.FC<RouteProps> = ({
  component: Component = () => <></>,
  ...rest
}) => {
  const user = useAuthContext();

  return (
    <Route
      {...rest}
      render={(props) =>
        user.auth ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
      }
    />
  );
};

export default PrivateRoute;
