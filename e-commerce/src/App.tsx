import React, { useEffect } from 'react';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Navbar, Products, Cart, Checkout } from './components';
import { actions } from './store/actions';
import useDispatchedActions from './hooks/useDispatchedActions';

const App = () => {
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
          <Route exact path="/cart" component={Cart} />
          {/*<Route path="/checkout" exact>*/}
          {/*    <Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout}*/}
          {/*              error={errorMessage}/>*/}
          {/*</Route>*/}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
