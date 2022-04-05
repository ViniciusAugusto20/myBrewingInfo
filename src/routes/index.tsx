import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './privateRoute';
import routes from './routes';

const Routes: React.FC = () => {
  return (
    <Switch>
      {routes.map((route) =>
        route.isPrivate ? (
          <PrivateRoute key={route.path} {...route} exact />
        ) : (
          <Route key={route.path} {...route} exact />
        ),
      )}
      {/* <Route component={Page404} /> */}
    </Switch>
  );
};

export default Routes;
