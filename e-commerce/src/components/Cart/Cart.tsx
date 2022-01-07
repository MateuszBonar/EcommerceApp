import React, { FC } from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

import CartItem from './CartItem/CartItem';
import useStyles from './styles';
import useDispatchedActions from '../../hooks/useDispatchedActions';
import { actions } from '../../store/actions';
import { useSelector } from 'react-redux';
import { getCartModuleSelector } from '../../store/cart/selectors';

const Cart: FC = (): JSX.Element => {
  const classes = useStyles();
  const { carts } = useSelector(getCartModuleSelector);

  const { clearCart } = useDispatchedActions({
    clearCart: actions.clearCart,
  });

  const renderEmptyCart = (): JSX.Element => (
    <Typography variant="subtitle1">
      You have no items in your shopping cart,
      <Link className={classes.link} to="/">
        start adding some
      </Link>
      !
    </Typography>
  );

  if (!carts.line_items) return <p>Loading</p>;

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
            onClick={() => clearCart}
          >
            Empty cart
          </Button>
          <Button
            className={classes.checkoutButton}
            component={Link}
            to="/checkout"
            size="large"
            type="button"
            variant="contained"
            color="primary"
          >
            Checkout
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
