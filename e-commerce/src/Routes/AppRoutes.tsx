import React, { FC, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from 'Components';
import { CssBaseline } from '@material-ui/core';
import { PUBLIC_ROUTE } from '../routes';
import { IRoute } from './types';

const publicRoutes: IRoute[] = [
  {
    path: PUBLIC_ROUTE.HOME,
    component: lazy(() => import('../components/Products')),
  },
  {
    path: PUBLIC_ROUTE.CART,
    component: lazy(() => import('../components/Cart')),
  },
];

const AppRoutes: FC = (): JSX.Element => {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <div style={{ display: 'flex' }}>
          <CssBaseline />
          <Navbar />
          <Switch>
            {publicRoutes.map((data, index) => (
              <PublicRoute
                key={index}
                path={data.path}
                component={data.component}
                exact={data.exact}
              />
            ))}
          </Switch>
        </div>
      </Suspense>
    </Router>
  );
};

export default AppRoutes;
