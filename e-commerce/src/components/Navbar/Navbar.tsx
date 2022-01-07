import React, {FC, useState} from 'react';
import {useSelector} from 'react-redux'
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from '@material-ui/core';
import {ShoppingCart} from '@material-ui/icons';
import {Link, useLocation} from 'react-router-dom';
import {getCartModuleSelector} from '../../store/cart/selectors'

import logo from '../../assets/commerce.png';
import useStyles from './styles';

const PrimarySearchAppBar: FC<{handleDrawerToggle: () => void}> = ({handleDrawerToggle}) => {
    const {carts} = useSelector(getCartModuleSelector)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(null);
    const classes = useStyles();
    const location = useLocation();

    // const handleMobileMenuClose = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    const mobileMenuId = 'primary-search-account-menu-mobile';

    // const renderMobileMenu = (
    //     <Menu anchorEl={isMobileMenuOpen} anchorOrigin={{vertical: 'top', horizontal: 'right'}} id="primary-search-account-menu-mobile"
    //           keepMounted transformOrigin={{vertical: 'top', horizontal: 'right'}}
    //           // onClose={handleMobileMenuClose}
    //     >
    //         <MenuItem>
    //             <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
    //                 <Badge badgeContent={carts?.length} color="secondary">
    //                     <ShoppingCart/>
    //                 </Badge>
    //             </IconButton>
    //             <p>Cart</p>
    //         </MenuItem>
    //     </Menu>
    // );

    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="commerce.js" height="25px" className={classes.image}/> Commerce.js
                    </Typography>
                    <div className={classes.grow}/>
                    {location.pathname === '/' && (
    // @ts-ignore
                        <div className={classes.button}>
                            <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                                <Badge badgeContent={carts?.length} color="secondary">
                                    <ShoppingCart/>
                                </Badge>
                            </IconButton>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
            {/*{renderMobileMenu}*/}
        </>
    );
};

export default PrimarySearchAppBar;
