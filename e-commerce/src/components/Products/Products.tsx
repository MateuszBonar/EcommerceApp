import React from 'react';
import Grid from '@material-ui/core/Grid';

import {actions} from '../../store/actions'
import useDispatchedActions from '../../hooks/useDispatchedActions';

import Product from './Product/Product';
import useStyles from './styles';
import {useSelector} from 'react-redux';
import {getProductsModuleSelector} from '../../store/products/selectors'

const Products = () => {

    const {products} = useSelector(getProductsModuleSelector)
    const classes = useStyles();

    const {addToCart} = useDispatchedActions({
        addToCart: actions.addToCart,
    })

    if (!products.length) return <p>Loading...</p>;

    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Grid container justify="center" spacing={4}>
                {products.map((product: any) => (
                    <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} onAddToCart={addToCart}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    );
};

export default Products;

