import React, { FC, useEffect } from 'react';

import { actions } from 'Store';
import { useDispatchedActions } from 'Hooks';
import AppRoutes from './Routes/AppRoutes';

const App: FC = (): JSX.Element => {
  const { getProducts, getCarts } = useDispatchedActions({
    getProducts: actions.getProducts,
    getCarts: actions.getCarts,
  });

  useEffect(() => {
    Promise.all([getProducts(), getCarts()]).catch(e => console.warn(e));
  }, []);

  return <AppRoutes />;
};

export default App;
