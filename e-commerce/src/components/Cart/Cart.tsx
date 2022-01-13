import React, { FC, useEffect } from 'react';
import {
  Container,
  Typography,
  Button,
  Grid,
  CircularProgress,
  LinearProgress,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import CartItem from './CartItem/CartItem';
import { useDispatchedActions } from 'Hooks';
import { actions } from 'Store';
import { getCartModuleSelector } from 'Store/cart/selectors';
import { PUBLIC_ROUTE } from '../../routes';

import useStyles from './styles';

const Cart: FC = (): JSX.Element => {
  const classes = useStyles();
  const { carts, isLoading } = useSelector(getCartModuleSelector);

  const { clearCart, getCarts } = useDispatchedActions({
    clearCart: actions.clearCart,
    getCarts: actions.getCarts,
  });

  const onClearCart = (): void => {
    clearCart();
  };

  const renderEmptyCart = (): JSX.Element => (
    <Typography variant="subtitle1">
      You have no items in your shopping cart,
      <Link className={classes.link} to={PUBLIC_ROUTE.HOME}>
        start adding some!
      </Link>
    </Typography>
  );

  useEffect(() => {
    getCarts();
  }, []);

  if (isLoading) return <LinearProgress />;

  const renderCart = (): JSX.Element => (
    <>
      <Grid container spacing={3}>
        {carts.line_items.map(lineItem => (
          <Grid item xs={12} sm={4} key={lineItem.id}>
            <CartItem item={lineItem} />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">Subtotal: {carts.subtotal.formatted_with_symbol}</Typography>
        <div>
          <Button
            className={classes.emptyButton}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
            onClick={onClearCart}
          >
            Empty cart
          </Button>
        </div>
      </div>
    </>
  );

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>
        Your Shopping Cart
      </Typography>
      {!carts.line_items.length ? renderEmptyCart() : renderCart()}
    </Container>
  );
};

export default Cart;
