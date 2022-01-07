import React, { FC } from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';

import { useDispatchedActions } from 'Hooks';
import { actions } from 'Store';
import { ICart } from 'Store/cart';

import useStyles from './styles';

const CartItem: FC<{ item: ICart }> = ({ item }) => {
  const classes = useStyles();

  const { updateCart, removeFromCart } = useDispatchedActions({
    updateCart: actions.updateCart,
    removeFromCart: actions.removeFromCart,
  });

  const handleUpdateCartQty = (): void => {
    updateCart(item.id, item.quantity + 1);
  };

  const handleRemoveFromCart = (): void => {
    removeFromCart(item.id);
  };

  return (
    <Card className="cart-item">
      {/* @ts-ignore */}
      <CardMedia image={item.media.source} alt={item.name} className={classes.media} />
      <CardContent className={classes.cardContent}>
        <Typography variant="h4">{item.name}</Typography>
        <Typography variant="h5">{item.line_total.formatted_with_symbol}</Typography>
      </CardContent>
      <CardActions className={classes.cartActions}>
        <div className={classes.buttons}>
          <Button type="button" size="small" onClick={handleRemoveFromCart}>
            -
          </Button>
          <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
          <Button type="button" size="small" onClick={handleUpdateCartQty}>
            +
          </Button>
        </div>
        <Button variant="contained" type="button" color="secondary" onClick={handleRemoveFromCart}>
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
