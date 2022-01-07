import React, { FC, useEffect } from 'react';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Navbar, Products, Cart } from './components';
import { actions } from '@Store/actions';
import useDispatchedActions from './hooks/useDispatchedActions';

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
          <Route exact path="/" component={Products} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
