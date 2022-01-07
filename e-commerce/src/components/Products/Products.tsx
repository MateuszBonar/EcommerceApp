import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useSelector } from 'react-redux';

import Product from 'Components/Products/Product';
import { getProductsModuleSelector, IProduct } from 'Store/products';

import useStyles from './styles';

const Products = () => {
  const { products } = useSelector(getProductsModuleSelector);
  const classes = useStyles();

  if (!products.length) return <p>Loading...</p>;

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product: IProduct) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
