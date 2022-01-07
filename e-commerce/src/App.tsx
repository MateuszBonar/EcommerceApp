import React, { FC, useEffect } from 'react';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Navbar, Products, Cart } from 'Components';
import { actions } from 'Store';
import { useDispatchedActions } from 'Hooks';
import { PUBLIC_ROUTE } from './routes';

const App: FC = (): JSX.Element => {
  const { getProducts, getCarts } = useDispatchedActions({
    getProducts: actions.getProducts,
    getCarts: actions.getCarts,
  });

  useEffect(() => {
    getProducts();
    getCarts();
  }, []);

  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <CssBaseline />
        <Navbar />
        <Switch>
          <Route exact path={PUBLIC_ROUTE.HOME} component={Products} />
          <Route path={PUBLIC_ROUTE.CART} component={Cart} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
