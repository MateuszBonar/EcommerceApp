import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import { useSelector } from 'react-redux';

import Product from 'Components/Products/Product';
import { getProductsModuleSelector, IProduct } from 'Store/products';
import LoadingWrapper from 'Components/LoadingWrapper';

import useStyles from './styles';

const Products: FC = (): JSX.Element => {
  const { products, isLoading } = useSelector(getProductsModuleSelector);
  const classes = useStyles();

  const renderProducts = (): JSX.Element => (
    <>
      {products.map((product: IProduct) => (
        <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
          <Product product={product} />
        </Grid>
      ))}
    </>
  );

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <LoadingWrapper isLoading={isLoading}>
        <Grid container justify="center" spacing={4}>
          {renderProducts()}
        </Grid>
      </LoadingWrapper>
    </main>
  );
};

export default Products;
