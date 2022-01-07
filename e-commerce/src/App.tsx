import React, { useState, useEffect } from 'react';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Navbar, Products, Cart, Checkout } from './components';
import { commerce } from './lib/commerce';
import { actions } from './store/actions';
import useDispatchedActions from './hooks/useDispatchedActions';

const App = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});

  const { getProducts, getCarts } = useDispatchedActions({
    getProducts: actions.getProducts,
    getCarts: actions.getCarts,
  });

  useEffect(() => {
    getProducts();
    getCarts();
  }, []);

  const handleDrawerToggle = (): void => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <CssBaseline />
        <Navbar handleDrawerToggle={handleDrawerToggle} />
        <Switch>
          <Route exact path="/">
            <Products />
          </Route>
          {/*<Route exact path="/cart">*/}
          {/*    <Cart cart={cart} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart}*/}
          {/*          onEmptyCart={handleEmptyCart}/>*/}
          {/*</Route>*/}
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
