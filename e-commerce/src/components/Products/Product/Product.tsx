import React, { FC } from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import { useSelector } from 'react-redux';

import { IProduct } from 'Store/products';
import { useDispatchedActions } from 'Hooks';
import { actions } from 'Store';
import { getCartModuleSelector } from 'Store/cart/selectors';

import useStyles from './styles';

const Product: FC<{ product: IProduct }> = ({ product }) => {
  const { isLoading } = useSelector(getCartModuleSelector);
  const classes = useStyles();

  const { addToCart } = useDispatchedActions({
    addToCart: actions.addToCart,
  });

  const handleAddToCart = (): void => {
    addToCart(product.id, 1);
  };

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={product.media.source} title={product.name} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            ${product.price.formatted}
          </Typography>
        </div>
        {/*USE BECAUSE API RETURNS HTML*/}
        <Typography
          dangerouslySetInnerHTML={{ __html: product.description }}
          variant="body2"
          color="textSecondary"
          component="p"
        />
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart" onClick={handleAddToCart} disabled={isLoading}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
